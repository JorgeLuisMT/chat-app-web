import { Router } from "express";
import { Users } from "../controllers/users.js";

export const createRouter = (model) => {
  const usersController = new Users(model);
  const usersRouter = Router();
  usersRouter.post("/", usersController.create);
  usersRouter.get("/", usersController.get);

  return usersRouter;
};
