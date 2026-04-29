import { Router } from "express";
import { Auth } from "../controllers/auth.js";

export const AuthRouter = (model) => {
  const authRouter = Router();
  const authController = new Auth(model);

  authRouter.post("/login", authController.login);
  authRouter.post("/register", authController.register);
  authRouter.post("/logout", authController.logout);

  return authRouter;
};
