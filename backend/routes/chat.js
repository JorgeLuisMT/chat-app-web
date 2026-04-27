import { Router } from "express";
import { Chat } from "../controllers/chat.js";

export const ChatRouter = (model) => {
  const chatRouter = Router();
  const chatController = new Chat(model);

  chatRouter.post("/", chatController.create);
  chatRouter.get("/:chat_id", chatController.get);

  return chatRouter;
};
