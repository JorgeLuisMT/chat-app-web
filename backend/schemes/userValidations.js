import * as z from "zod";

const userValidations = z.object({
  user_name: z.string(),
  user_email: z.email(),
  user_password: z.string().max(20),
});

export const validatePartialUser = (data) =>
  userValidations.partial().safeParse(data);

export const validateUser = (data) => userValidations.safeParse(data);
