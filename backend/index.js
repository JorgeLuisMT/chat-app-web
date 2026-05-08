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
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import { handleChatConnection } from "./sockets/chat.js";

export const createApp = (models) => {
  const app = express();
  const server = createServer(app);
  const io = new Server(server, {
    connectionStateRecovery: {},
  });
  dotenv.config();
  const PORT = process.env.PORT ?? 1234;

  const _dirname = dirname(fileURLToPath(import.meta.url));

  app.use(express.json());

  app.use(cookieParser());

  app.get("/", (req, res) => {
    res.status(200).sendFile(join(_dirname, "index.html"));
  });

  app.use("/auth", AuthRouter(models.auth));

  app.use((req, res, next) => {
    let token = req.cookies.access_token;
    let decode = null;

    if (!token) return next();

    req.user = null;

    try {
      decode = jwt.verify(token, process.env.SECRET_WORD);

      req.user = { user_id: decode.user_id };
    } catch (error) {
      console.log("soy error de request middleware");
      console.log(error.message);
    }
    next();
  });

  io.use((socket, next) => {
    const cookies = socket.handshake.headers.cookie || "";
    let decode = null;

    const parsed = Object.fromEntries(
      cookies.split("; ").map((c) => c.split("=")),
    );

    let token = parsed.access_token;

    socket.user = null;
    try {
      decode = jwt.verify(token, process.env.SECRET_WORD);
      socket.user = { user_id: decode.user_id };
      next();
    } catch (error) {
      socket.user = null;
      console.log("soy error de socket middleware");
      console.log(error.message);
    }
  });

  const requireAuth = (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "unauthorized" });
    }
    next();
  };

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

  app.set("io", io);

  handleChatConnection(io);

  server.listen(PORT, () => {
    console.log(`Your server is ready on http://localhost:${PORT}`);
  });
};
