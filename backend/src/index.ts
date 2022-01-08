import { WebSocketServer } from "ws";
import { User } from "./User/User";

const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", (ws) => {
  const user = new User("1");
  ws.on("message", (data) => console.log(data.toString()));
  ws.send("welcome!");
});
