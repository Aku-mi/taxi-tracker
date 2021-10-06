import mongoose from "mongoose";
import config from "../config";

mongoose.connect(config.MONGODB.URI);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb Connection stablished.");
});

connection.on("error", (err) => {
  console.log("Mongodb connection error:", err);
  process.exit(0);
});
