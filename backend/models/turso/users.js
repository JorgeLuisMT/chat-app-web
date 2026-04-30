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
  static async getPrivateUser(id) {
    try {
      let getUser = await connection.execute({
        sql: `SELECT user_name, user_email FROM users WHERE user_id = ?`,
        args: [id],
      });
      if (getUser.rows.length === 0) throw { message: "User not found" };

      return {
        user_name: getUser.rows[0].user_name,
        user_email: getUser.rows[0].user_email,
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  static async getPublicUser({ user_id = null, user_name = null }) {
    try {
      let getUser;

      getUser = await connection.execute({
        sql: `SELECT user_name, user_id FROM users WHERE user_id = ? OR user_name = ?`,
        args: [user_id || "", user_name || ""],
      });

      if (getUser.rows.length === 0) throw { message: "User not Found" };

      return {
        user_name: getUser.rows[0].user_name,
        user_id: getUser.rows[0].user_id,
      };
    } catch (error) {
      return { error: error.message };
    }
  }
}
