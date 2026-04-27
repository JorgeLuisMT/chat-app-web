import { createClient } from "@libsql/client";
import { randomUUID } from "node:crypto";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

export const connection = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export class Users {
  static async create(user) {
    try {
      let { user_name, user_email, user_password } = user;

      let id = randomUUID();
      let cryptedPassword = await bcrypt.hash(user_password, 10);

      let result = await connection.execute({
        sql: `INSERT INTO users(
        user_id,
        user_name,
        user_email,
        user_password,
        created_at
      ) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)`,
        args: [id, user_name, user_email, cryptedPassword],
      });

      return { ...user, id };
    } catch (e) {
      console.error("DB ERROR:", e.message);
    }
  }

  static async get(id) {
    try {
      let result = await connection.execute({
        sql: `SELECT user_name, user_email FROM users WHERE user_id = ?`,
        args: [id],
      });
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }
}
