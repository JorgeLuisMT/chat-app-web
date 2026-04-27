import { connection } from "./users.js";
import { randomUUID } from "node:crypto";

export class UserFriendship {
  static async create(requester_id, receiver_id) {
    try {
      let id = randomUUID();
      let result = connection.execute({
        sql: `INSERT INTO user_friendship(id, requester_id, receiver_id, status) VALUES (?, ?, ?, "pending")`,
        args: [id, requester_id, receiver_id],
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static async getFriends(id) {
    try {
      let result = await connection.execute({
        sql: `
                SELECT 
                    CASE WHERE requester_id = ? THEN receiver_id
                    ELSE requester_id
                END AS friend_id
                FROM friendship_users
                WHERE (requester_id = ? OR receiver_id = ?)
                AND status = 'accepted'
            `,
        args: [id, id, id],
      });
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }

  static async update(user_id, id, status) {
    try {
      let isUserRelated = await connection.execute({
        sql: `SELECT 1 FROM user_friendship WHERE requester_id = ? OR receiver_id = ?`,
        args: [user_id, user_id],
      });
      if (isUserRelated.rows.length === 0)
        throw { message: "Invalid credentials" };

      let result = connection.execute({
        sql: `UPDATE user_friendship SET status = ? WHERE id = ?`,
        args: [status, id],
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
