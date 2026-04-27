import { Router } from "express";
import { UserFriendship } from "../controllers/user_friendship.js";

export const UserFriendshipRouter = (model) => {
  const userFriendship = Router();
  const userFriendshipController = new UserFriendship(model);

  userFriendship.post("/", userFriendshipController.create);
  userFriendship.get("/", userFriendshipController.getFriends);
  userFriendship.put("/", userFriendshipController.update);

  return userFriendship;
};
