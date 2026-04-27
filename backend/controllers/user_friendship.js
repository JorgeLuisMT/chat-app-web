import { ValidateFriendship, ValidateUserID } from "../schemes/validations.js";

export class UserFriendship {
  constructor(model) {
    this.model = model;
  }

  create = async (req, res) => {
    let validation = ValidateUserID(req.body);
    let { user_id } = req.user_id;
    if (!validation.success) {
      return res.status(400).json({ message: "Invalid user" });
    }
    let result = await this.model.create(user_id, validation.data);
    return res.status(201).json(result);
  };

  getFriends = async (req, res) => {
    let { user_id } = req.user;
    let result = await this.model.getFriends(user_id);
    return res.status(200).json(result);
  };

  update = async (req, res) => {
    let { user_id } = req.user;
    let validation = ValidateFriendship(req.body);
    let { id, status } = validation.data;
    if (!validation.success) {
      return res.status(400).json({ message: validation.error });
    }
    let result = await this.model.update(user_id, id, status);
    return res.status(201).json(result);
  };
}
