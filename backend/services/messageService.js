import { connection } from "../models/turso/users.js";
import { UserService } from "./userService.js";

export class MessageService {
  static async getMessages({ user_id, chat_id }) {
    try {
      let isUserAllowed = await UserService.isUserInChat({ user_id, chat_id });

      if (isUserAllowed.error) throw isUserAllowed.error;

      let getLostMessages = await connection.execute({
        sql: `SELECT * FROM messages WHERE created_at > ? AND chat_id = ? ORDER BY created_at ASC`,
        args: [
          socket.handshake.auth.serverOffset || "1970-01-01 00:00:00",
          chat_id,
        ],
      });

      return getLostMessages;
    } catch (error) {
      return error;
    }
  }
}
