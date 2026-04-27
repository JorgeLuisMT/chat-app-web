import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { createRouter } from "./routes/users.js";
import { MessagesRouter } from "./routes/messages.js";
import { UserFriendshipRouter } from "./routes/friendships.js";
import { ChatRouter } from "./routes/chat.js";
import { ChatParticipantsRouter } from "./routes/chatParticipants.js";
import { AuthRouter } from "./routes/auth.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

export const createApp = (models) => {
  const app = express();
  const server = createServer(app);
  const io = new Server(server, {
    connectionStateRecovery: {},
  });
  dotenv.config();
  const PORT = process.env.PORT ?? 1234;

  app.use(express.json());

  app.use(cookieParser());

  app.use((req, res, next) => {
    let token = req.cookies.access_token;
    let decode = null;

    req.user = { user_id: null, user_name: null };
    try {
      decode = jwt.verify(token, process.env.SECRET_WORD);
      req.user.user_id = decode.user_id;
    } catch (error) {
      req.user.user_id = null;
    }

    next();
  });
  app.get("/", (req, res) => {
    console.log(req.user.user_id);
    res.send({ ok: true });
  });

  app.use("/", AuthRouter(models.auth));
  app.use("/users", createRouter(models.users));
  app.use("/messages", MessagesRouter(models.messages));
  app.use("/friendship", UserFriendshipRouter(models.user_friendship));
  app.use("/chat", ChatRouter(models.chat));
  app.use(
    "/chat_participants",
    ChatParticipantsRouter(models.chat_participants),
  );

  io.on("connection", (socket) => {
    console.log("a user has connected");
    socket.on("chat message", (msg) => {
      io.emit("chat message", msg, serverOffset);
    });
    socket.on("disconnect", () => {
      console.log("a user has disconnected");
    });
  });

  server.listen(PORT, () => {
    console.log(`Your server is ready on http://localhost:${PORT}`);
  });
};
