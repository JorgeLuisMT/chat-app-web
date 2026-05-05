import { connection } from "../models/turso/users.js";
import { MessageService } from "../services/messageService.js";

export const handleChatConnection = (io) => {
  io.on("connection", async (socket) => {
    console.log("a user has connected");
    let { chat_id } = socket.handshake.auth;
    let { user_id } = socket.user;

    socket.on("join chat", (chat_id) => {
      socket.join(chat_id);
      io.to(chat_id).emit("hello", "world");
    });

    socket.on("disconnect", () => {
      console.log("a user has disconnected");
    });

    if (!socket.recovered) {
      try {
        let getLostMessages = await MessageService.getMessages({
          user_id,
          chat_id,
        });

        if (getLostMessages.error) throw error;

        for (let i = 0; i < getLostMessages.rows.length; i++) {
          io.emit(
            "chat message",
            getLostMessages.rows[i].message,
            getLostMessages.rows[i].created_at,
          );
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  });
};
