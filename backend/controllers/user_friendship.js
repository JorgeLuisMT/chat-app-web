import { ValidateFriendship, ValidateUserID } from "../schemes/validations.js";

export class UserFriendship {
  constructor(model) {
    this.model = model;
  }

  create = async (req, res) => {
    let validation = ValidateUserID(req.body);
    let { user_id } = req.user;
    if (!validation.success) {
      return res.status(400).json({ message: "Invalid user" });
    }
    let { user: receiver_id } = validation.data;
    let result = await this.model.create({ user_id, receiver_id });
    if (result.error) {
      return res.status(400).json(result);
    }
    res.status(201).json(result);
  };

  getFriends = async (req, res) => {
    let { user_id } = req.user;
    let result = await this.model.getFriends({ user_id });
    if (result.error) {
      return res.status(403).json(result);
    }
    res.status(200).json(result);
  };

  acceptFriend = async (req, res) => {
    let { user_id } = req.user;
    let { friendship_id } = req.params;
    let result = await this.model.acceptFriend({ user_id, friendship_id });
    if (result.error) {
      return res.status(403).json(result);
    }
    res.status(204).json(result);
  };

  update = async (req, res) => {
    let { user_id } = req.user;
    let validation = ValidateFriendship(req.body);
    let { id, status } = validation.data;
    if (!validation.success) {
      return res.status(400).json({ message: validation.error });
    }
    let result = await this.model.update(user_id, id, status);
    res.status(201).json(result);
  };
}
