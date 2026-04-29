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

    //req.user = { user_id: null, user_name: null };
    req.user = null;
    try {
      decode = jwt.verify(token, process.env.SECRET_WORD);

      req.user = { user_id: decode.user_id };
    } catch (error) {
      req.user = null;
      console.log(error.message);
    }

    next();
  });

  const requireAuth = (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "unauthorized" });
    }
    next();
  };
  app.get("/", (req, res) => {
    console.log(req.user.user_id);
    res.send({ ok: true });
  });

  app.use("/", AuthRouter(models.auth));
  app.use("/users", requireAuth, createRouter(models.users));
  app.use(requireAuth, MessagesRouter(models.messages));
  app.use(
    "/friendship",
    requireAuth,
    UserFriendshipRouter(models.user_friendship),
  );
  app.use("/chat", requireAuth, ChatRouter(models.chat));
  app.use(
    "/chat_participants",
    requireAuth,
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
