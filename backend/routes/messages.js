import { Router } from "express";
import { Messages } from "../controllers/messages.js";

export const MessagesRouter = (model) => {
  const messagesRouter = Router();
  const messagesController = new Messages(model);

  messagesRouter.post("/", messagesController.create);
  messagesRouter.get("/", messagesController.get);

  return messagesRouter;
};
