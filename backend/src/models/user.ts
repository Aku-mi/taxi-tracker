import { Schema, model } from "mongoose";
import { User } from "../libs";

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
    },

    lastname: {
      type: String,
    },

    user: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
    },

    role: {
      ref: "Role",
      type: Schema.Types.ObjectId,
    },

    tokenVersion: {
      type: Number,
      default: 0,
    },

    data: [
      {
        ref: "Data",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const UserModel = model<User>("User", userSchema);
