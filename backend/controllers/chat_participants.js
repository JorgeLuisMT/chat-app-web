import { ValidateUserID } from "../schemes/validations.js";

export class ChatParticipants {
  constructor(model) {
    this.model = model;
  }

  create = async (req, res) => {
    let validation = ValidateUserID(req.body);
    let { chat_id } = req.params;
    let { user_id } = req.user;

    if (!validation.success) {
      return res.status(400).json({ message: "Invalid user" });
    }
    let result = await this.model.create(chat_id, user_id, validation.data);

    if (result.hasOwnProperty("error")) {
      return res.status(403).json(result);
    }
    return res.status(200).json(result);
  };

  get = async (req, res) => {
    // let { chat_id } = req.params;
    let { user_id } = req.user;
    let result = await this.model.get({ user_id });
    if (result.error) {
      return res.status(404).json(result);
    }
    res.status(200).json(result);
  };
}
