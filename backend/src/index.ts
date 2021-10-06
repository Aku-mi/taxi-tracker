require("dotenv").config();

import { httpServer, udpServer } from "./app";

//HTTP Server Listening
httpServer.listen(process.env.PORT, () => {
  console.log(`HTTP Server listening at port: ${process.env.PORT}`);
});

//UDP Server Listening
udpServer.bind(process.env.UDP_PORT);
