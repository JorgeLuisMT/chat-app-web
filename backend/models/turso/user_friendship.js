import { connection } from "./users.js";
import { randomUUID } from "node:crypto";

export class UserFriendship {
  static async create({ user_id: requester_id, receiver_id }) {
    try {
      let duplicates = await connection.execute({
        sql: `SELECT 1 FROM user_friendship WHERE (requester_id = ? AND receiver_id = ?) OR (receiver_id = ? AND requester_id = ?)`,
        args: [requester_id, receiver_id, requester_id, receiver_id],
      });
      if (duplicates.rows.length > 0)
        throw { message: "No duplicates allowed" };
      let id = randomUUID();
      let result = connection.execute({
        sql: `INSERT INTO user_friendship(id, requester_id, receiver_id, status) VALUES (?, ?, ?, ?)`,
        args: [id, requester_id, receiver_id, "pending"],
      });
      return result;
    } catch (error) {
      return { error: error.message };
    }
  }

  static async getFriends({ user_id }) {
    try {
      let friends = await connection.execute({
        sql: `
                SELECT u.user_name
                FROM user_friendship f
                JOIN users u
                  ON u.user_id = CASE
                    WHEN f.requester_id = ? THEN f.receiver_id
                    ELSE f.requester_id
                  END
                WHERE (f.requester_id = ? OR f.receiver_id = ?)
               AND f.status = 'accepted'
            `,
        args: [user_id, user_id, user_id],
      });
      if (friends.rows.length === 0) throw { message: "User has no friends" };
      return friends.rows;
    } catch (error) {
      return { error: error.message };
    }
  }

  static async acceptFriend({ user_id, friendship_id: id }) {
    try {
      let isReceiver = await connection.execute({
        sql: `SELECT 1 FROM user_friendship WHERE receiver_id = ? AND id = ?`,
        args: [user_id, id],
      });
      if (isReceiver.rows.length === 0)
        throw { message: "Invalid credentials" };

      let result = await connection.execute({
        sql: `UPDATE user_friendship SET status = 'accepted' WHERE id = ?`,
        args: [id],
      });
      return result;
    } catch (error) {
      return { error: error.message };
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
      return { error: error.message };
    }
  }
}
