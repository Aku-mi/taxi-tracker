import { DataModel, UserModel } from "../models";
import { Socket } from "socket.io";

export async function getLastData(
  this: Socket,
  req: { id: string[]; admin: boolean }
) {
  const _user = await UserModel.findById(req.id[0]).populate("data");
  if (_user) {
    const last = _user.data[_user.data.length - 1];
    this.emit("server:live", last);
  }
}

export async function getHistory(
  this: Socket,
  req: { ti: number; tf: number; admin: boolean; id: string[] }
) {
  const data = await DataModel.find().where("tmp").gte(req.ti).lte(req.tf);

  this.emit("server:history", data);
}
