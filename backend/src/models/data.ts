import { Schema, model } from "mongoose";
import { Data } from "../libs";

const dataSchema = new Schema(
  {
    lat: Number,
    lng: Number,
    speed: Number,
    tmp: Number,
  },
  {
    versionKey: false,
  }
);

export const DataModel = model<Data>("Data", dataSchema);
