import { connection } from "../models/turso/users.js";
import { MessageService } from "../services/messageService.js";

export const handleChatConnection = (io) => {
  io.on("connection", async (socket) => {
    console.log("a user has connected");
    let { chat_id } = socket.handshake.auth;
    let { user_id } = socket.user;

    console.log(user_id, chat_id);

    socket.on("join room", (chatId) => {
      socket.join(`chat_${chatId}`);
    });

    socket.on("chat message", ({ chatId, msg }) => {
      console.log(msg);
      io.to(`chat_${chatId}`).emit("chat message", { msg });
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
          scoket.emit(
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
