import { connection } from "./users.js";
import { randomUUID } from "node:crypto";

export class Chat {
  static async create({ chat_name }) {
    try {
      let id = randomUUID();
      let result = connection.execute({
        sql: `INSERT INTO chat(chat_id, chat_name) VALUES (?,?)`,
        args: [id, chat_name],
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static async get(chat_id, user_id) {
    try {
      let validation = await connection.execute({
        sql: `SELECT 1 FROM chat_participants WHERE chat_id = ? AND user_id = ?`,
        args: [chat_id, user_id],
      });
      if (validation.rows.length === 0)
        throw { message: "Invalid credentials" };

      let result = await connection.execute({
        sql: `SELECT chat_name FROM chat WHERE chat_id = ?`,
        args: [chat_id],
      });
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }
}
