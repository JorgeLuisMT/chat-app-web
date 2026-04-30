import { connection } from "./users.js";
import { randomUUID } from "node:crypto";

export class Messages {
  static async create({ message, user_id, chat_id }) {
    try {
      let message_id = randomUUID();
      let result = connection.execute({
        sql: `INSERT INTO messages(message_id, message, user_id, chat_id) VALUES (?,?,?,?)`,
        args: [message_id, message, user_id, chat_id],
      });
      return result;
    } catch (error) {
      return { error: error.message };
    }
  }

  static async get({ chat_id, user_id }) {
    try {
      let validation = await connection.execute({
        sql: `SELECT 1 FROM chat_participants WHERE chat_id = ? AND user_id = ?`,
        args: [chat_id, user_id],
      });
      if (validation.rows.length === 0)
        throw { message: "Invalid credentials" };

      let getMessages = await connection.execute({
        sql: `SELECT * FROM messages WHERE chat_id = ?`,
        args: [chat_id],
      });

      return getMessages.rows;
    } catch (error) {
      return { error: error.message };
    }
  }
}
