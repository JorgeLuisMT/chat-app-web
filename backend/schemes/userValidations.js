import * as z from "zod";

const userValidations = z.object({
  user_name: z.string(),
  user_email: z.email(),
  user_password: z.string().max(20),
});

const getUserValidations = z.object({
  user_name: z.string(),
  user_id: z.uuid(),
});

export const validateGetUser = (data) =>
  getUserValidations.partial().safeParse(data);

export const validatePartialUser = (data) =>
  userValidations.partial().safeParse(data);

export const validateUser = (data) => userValidations.safeParse(data);
