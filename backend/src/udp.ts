import udp from "dgram";
import {
  onClose,
  onError,
  onListening,
  onMessage,
} from "./controllers/udp.controller";

export const createUdpServer = () => {
  const updSocket = udp.createSocket("udp4");

  updSocket.on("listening", onListening);

  updSocket.on("error", onError);

  updSocket.on("close", onClose);

  updSocket.on("message", onMessage);

  return updSocket;
};
