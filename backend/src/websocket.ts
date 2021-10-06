import { Server as WebSocketServer } from "socket.io";
import { Server } from "http";

import { getHistory, getLastData } from "./controllers/websocket.controller";

export const createWebSocketServer = (httpServer: Server) => {
  const io = new WebSocketServer(httpServer, {
    cors: {
      origin: "*",
    },
    path: "/data",
  });

  io.on("connection", (socket) => {
    socket.on("client:getLive", getLastData);
    socket.on("client:getHistory", getHistory);
  });

  return io;
};
