import { createApp } from "./index.js";
import { Users } from "./models/turso/users.js";
import { Chat } from "./models/turso/chat.js";
import { Messages } from "./models/turso/messages.js";
import { ChatParticipants } from "./models/turso/chat_participants.js";
import { UserFriendship } from "./models/turso/user_friendship.js";
import { Auth } from "./models/turso/auth.js";

const model = {
  users: Users,
  chat: Chat,
  messages: Messages,
  chat_participants: ChatParticipants,
  user_friendship: UserFriendship,
  auth: Auth,
};

createApp(model);
