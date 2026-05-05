import { connection } from "../models/turso/users.js";

export class UserService {
  static async isUserInChat({ chat_id, user_id }) {
    try {
      let isUser = await connection.execute({
        sql: `SELECT 1 FROM chat_participants WHERE user_id = ? AND chat_id = ?`,
        args: [user_id, chat_id],
      });

      if (isUser.rows.length === 0) throw { message: "User is not in chat" };

      return true;
    } catch (error) {
      return { error: error.message };
    }
  }
}
