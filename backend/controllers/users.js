import { validateGetUser } from "../schemes/userValidations.js";

export class Users {
  constructor(model) {
    this.model = model;
  }

  getPrivateUser = async (req, res) => {
    let result = await this.model.getPrivateUser(req.user.user_id);
    return res.status(200).json(result);
  };

  getPublicUser = async (req, res) => {
    let validation = validateGetUser(req.body);
    if (!validation.success) {
      return res.status(400).json({ message: validation.error });
    }

    let result = await this.model.getPublicUser(validation.data);

    if (result.error) {
      return res.status(404).json(result);
    }

    res.status(200).json(result);
  };
}
