import { validateMessage } from "../schemes/message.js";

export class Messages {
  constructor(model) {
    this.model = model;
  }

  create = async (req, res) => {
    let validation = validateMessage(req.body);
    if (!validation.success) {
      return res.status(400).json({ message: validation.error });
    }
    let result = await this.model.create(validation.data);
    return res.status(201).json(result);
  };

  get = async (req, res) => {
    let { chat_id } = req.params;
    let { user_id } = req.user;
    let result = await this.model.get(chat_id, user_id);
    return res.status(200).json(result);
  };
}
