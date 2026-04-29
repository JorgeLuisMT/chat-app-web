/* import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

let token = jwt.sign(
  { name: "jorge", password: "123" },
  process.env.SECRET_WORD,
);
console.log(token);

let decode = jwt.verify(token, process.env.SECRET_WORD);

console.log(decode); */

import zod from "zod";

let result = zod
  .object({
    arr: zod.string().array(),
  })
  .safeParse({ arr: ["hola", "adios"] });

console.log(result);
