import mongoose, { Document } from "mongoose";

export interface Role extends Document {
  _id?: mongoose.ObjectId;
  name: string;
}

export interface Data extends Document {
  _id?: mongoose.ObjectId;
  lat: number;
  lng: number;
  tmp: number;
  speed: number;
}

export interface User extends Document {
  _id?: mongoose.ObjectId;
  name: string;
  lastname: string;
  user: string;
  gender: "male" | "female";
  password: string;
  role: Role;
  data: Data[];
  tokenVersion: number;
}

export interface Payload {
  userName: string;
  _id: string;
  role: string;
  tokenVersion: number;
  iat: number;
  exp: number;
}
