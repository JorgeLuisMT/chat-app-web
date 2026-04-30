import { Router } from "express";
import { Users } from "../controllers/users.js";

export const createRouter = (model) => {
  const usersController = new Users(model);
  const usersRouter = Router();
  usersRouter.get("/", usersController.getPrivateUser);
  usersRouter.get("/public", usersController.getPublicUser);

  return usersRouter;
};
