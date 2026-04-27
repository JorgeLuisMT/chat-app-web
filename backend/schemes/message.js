import * as z from "zod";

const messageValidations = z.object({
  message: z.string(),
});

export const validateMessage = (data) => messageValidations.safeParse(data);
