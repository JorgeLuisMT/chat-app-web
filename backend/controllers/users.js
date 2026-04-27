import { validateUser } from "../schemes/userValidations.js";

export class Users {
  constructor(model) {
    this.model = model;
  }

  create = async (req, res) => {
    let validation = validateUser(req.body);
    if (!validation.success) {
      return res.status(400).json({ message: validation.error });
    } else {
      let result = await this.model.create(validation.data);
      return res.status(201).json(result);
    }
  };

  get = async (req, res) => {
    let result = await this.model.get(req.user.user_id);
    return res.status(200).json(result);
  };
}
