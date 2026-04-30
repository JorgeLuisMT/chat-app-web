import { Router } from "express";
import { Messages } from "../controllers/messages.js";

export const MessagesRouter = (model) => {
  const messagesRouter = Router();
  const messagesController = new Messages(model);

  messagesRouter.post("/chat/:chat_id/messages", messagesController.create);
  messagesRouter.get("/chat/:chat_id/messages", messagesController.get);

  return messagesRouter;
};
