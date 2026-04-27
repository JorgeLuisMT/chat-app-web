import { validatePartialUser } from "../schemes/userValidations.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export class Auth {
  constructor(model) {
    this.model = model;
  }

  login = async (req, res) => {
    let validation = validatePartialUser(req.body);
    if (!validation.success) {
      return res.status(400).json({ message: validation.error });
    }
    let result = await this.model.login(validation.data);
    console.log(result);

    let token = jwt.sign(result, process.env.SECRET_WORD, { expiresIn: "1h" });

    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 1000 * 60 * 60,
      })
      .json({ ...result, token });
  };
}
