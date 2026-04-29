import { connection } from "./users.js";
import { randomUUID } from "node:crypto";
import bcrypt from "bcrypt";

export class Auth {
  static async login({ user_name, user_password }) {
    try {
      let consultPasswordQuery = await connection.execute({
        sql: `SELECT user_password, user_name, user_id FROM users WHERE user_name = ?`,
        args: [user_name],
      });
      if (consultPasswordQuery.rows.length === 0)
        throw { message: "Invalid user" };

      let cryptedPassword = consultPasswordQuery.rows[0].user_password;
      let user_id = consultPasswordQuery.rows[0].user_id;

      let comparePassword = await bcrypt.compare(
        user_password,
        cryptedPassword,
      );
      if (!comparePassword) throw { message: "Invalid password" };

      return { user_name, user_id };
    } catch (error) {
      return { error: error.message };
    }
  }

  static async register({ user_name, user_email, user_password }) {
    try {
      let user_id = randomUUID();
      let cryptedPassword = await bcrypt.hash(user_password, 10);

      let result = await connection.execute({
        sql: `INSERT INTO users(
            user_id,
            user_name,
            user_email,
            user_password,
            created_at
          ) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)`,
        args: [user_id, user_name, user_email, cryptedPassword],
      });

      return { user_id, user_name };
    } catch (error) {
      return { error: error.message };
    }
  }
}
