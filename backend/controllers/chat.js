import { validateChat } from "../schemes/chatValidations.js";

export class Chat {
  constructor(model) {
    this.model = model;
  }

  create = async (req, res) => {
    let validation = validateChat(req.body);
    if (!validation.success) {
      return res.status(400).json({ message: validation.error });
    }
    let result = await this.model.create(validation.data);
    if (result.error) {
      return res.status(400).json(result);
    }
    res.status(201).json(result);
  };

  get = async (req, res) => {
    let { chat_id } = req.params;
    let { user_id } = req.user;
    let result = await this.model.get(chat_id, user_id);
    if (result.error) {
      return res.status(403).json(result);
    }
    res.status(200).json(result);
  };
}
