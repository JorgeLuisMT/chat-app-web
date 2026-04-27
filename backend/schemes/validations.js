import * as z from "zod";

const userIDValidations = z.object({
  users: z.uuid().array(),
});

const friendshipValidations = z.object({
  id: z.uuid(),
  status: z.enum(["accepted", "pending", "blocked"]),
});

export const ValidateFriendship = (id) => friendshipValidations.safeParse(id);

export const ValidateUserID = (data) => userIDValidations.safeParse(data);
