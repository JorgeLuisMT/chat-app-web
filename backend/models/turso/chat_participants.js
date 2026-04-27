import { connection } from "./users.js";

export class ChatParticipants {
  static async create(chat_id, user_id = null, users) {
    let result;

    const insertIntoChat = async (users) => {
      for (let i = 0; i < users.length; i++) {
        result = await connection.execute({
          sql: `INSERT INTO chat_participants(chat_id, user_id) VALUES (?, ?)`,
          args: [chat_id, users[i]],
        });
      }
    };

    try {
      let isChatEmpty = await connection.execute({
        sql: `SELECT 1 FROM chat_participants WHERE chat_id = ?`,
        args: [chat_id],
      });

      if (isChatEmpty.rows.length === 0) {
        insertIntoChat(users);
      } else {
        let IsUserInChat = await connection.execute({
          sql: `SELECT 1 FROM chat_participants WHERE chat_id = ? AND user_id = ?`,
          args: [chat_id, user_id],
        });
        if (IsUserInChat.rows.length === 0)
          throw { message: "Invalid credentials" };
        insertIntoChat(users);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static async get(user_id) {
    try {
      /* let validation = await connection.execute({
        sql: `SELECT 1 FROM chat_participants WHERE chat_id = ? AND user_id = ?`,
        args: [chat_id, user_id],
      });
      if (validation.rows.length === 0)
        throw { message: "Invalid credentials" }; */
      let result = await connection.execute({
        sql: `SELECT * FROM chat_participants WHERE user_id = ?`,
        args: [user_id],
      });
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }
}
