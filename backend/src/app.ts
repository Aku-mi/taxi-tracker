import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import config from "./config";
import cors from "cors";
import http from "http";
import { createWebSocketServer } from "./websocket";
import { createUdpServer } from "./udp";
import { initRoles } from "./libs";
import routes from "./routes";

const app = express();

// Init DataBase
import "./database";

// Roles
initRoles();

// Settings
app.set("port", config.PORT);
app.set("udp-port", config.UDP_PORT);

// Middlewares
app.use(
  cors({
    origin: config.CORS.ORIGIN,
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/v1", routes);

// HTTP Server
const httpServer = http.createServer(app);

// WebSocket Server
const io = createWebSocketServer(httpServer);

//UDP server
const udpServer = createUdpServer();

export { udpServer, httpServer };
