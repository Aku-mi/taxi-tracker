import { DataModel, UserModel } from "../models";
import { RemoteInfo, Socket } from "dgram";
import { Buffer } from "buffer";
import { Data } from "../libs";

export function onListening(this: Socket) {
  let address = this.address();
  console.log("UDP Server listening at port: " + address.port);
}

export async function onMessage(this: Socket, msg: Buffer, rInf: RemoteInfo) {
  try {
    const { id, data } = JSON.parse(msg.toString()) as {
      id: string;
      data: Data;
    };
    this.send(JSON.stringify({ ok: true }, null, 2), rInf.port, rInf.address);

    const _user = await UserModel.findById(id);

    if (_user) {
      const _data = new DataModel(data);
      _user.data.push(_data);
      await _data.save();
      await _user.save();
    }
  } catch (_) {
    console.error("UDP_ERROR: Unexpected JSON");
  }
}

export function onError(this: Socket, error: Error) {
  console.log("Error: " + error);
  this.close();
}

export const onClose = () => {
  console.log("UDP Socket is closed");
};
