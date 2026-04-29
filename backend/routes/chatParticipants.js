import { Router } from "express";
import { ChatParticipants } from "../controllers/chat_participants.js";

export const ChatParticipantsRouter = (model) => {
  const chatParticipantsRouter = Router();
  const chatParticipantsController = new ChatParticipants(model);

  chatParticipantsRouter.post("/:chat_id", chatParticipantsController.create);
  chatParticipantsRouter.get("/", chatParticipantsController.get);

  return chatParticipantsRouter;
};
