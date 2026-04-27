import * as z from "zod";

const chatValidations = z.object({
  chat_name: z.string().max(50),
});

export const validateChat = (data) => chatValidations.safeParse(data);
