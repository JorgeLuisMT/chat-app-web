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

import http from "node:http";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import { randomUUID, verify } from "node:crypto";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

const server = http.createServer(async (req, res) => {
  switch (req.method) {
    case "GET":
      switch (req.url) {
        case "/":
          const _dirname = dirname(fileURLToPath(import.meta.url));
          const htmlPath = join(_dirname, "index.html");
          const htmlContent = await fs.readFile(htmlPath, "utf-8");

          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          res.end(htmlContent);

          break;
      }
      break;
    case "POST":
      if (req.url === "/login") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", () => {
          let id = randomUUID();
          let data = JSON.parse(body);
          let token = jwt.sign(id, "this-is-my-secret-word");

          res.writeHead(201, {
            "content-type": "application/json; charset=utf-8",
            "Set-Cookie": `token=${token}; HttpOnly; Path=/; SameSite=Lax`,
          });
          res.end(body);
        });
      }
      break;

    default:
      console.log("invalid");
      break;
  }
});

const io = new Server(server);
io.on("connection", (socket) => {
  const cookie = socket.handshake.headers.cookie;
  const parsed = Object.fromEntries(
    cookie.split("; ").map((c) => c.split("=")),
  );

  let token = parsed.token;

  try {
    let decode = jwt.verify(token, "this-is-my-secret-word");
    console.log(decode);
  } catch (error) {
    console.log(error.message);
  }
});

server.listen(3000, () => {
  console.log(`Server ready on http://localhost:3000`);
});
