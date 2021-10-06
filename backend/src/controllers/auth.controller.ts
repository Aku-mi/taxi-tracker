import { Request, Response } from "express";
import {
  User,
  Role,
  cookieConf,
  createAcessToken,
  createRefreshToken,
  comparePassword,
  encryptPassword,
} from "../libs";
import { UserModel, RoleModel } from "../models";

export const signIn = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { user, password } = req.body;

  const _user: User | null = await UserModel.findOne({
    user,
  }).populate("role");

  if (_user) {
    const matchPass = await comparePassword(_user.password, password);
    if (!matchPass) {
      return res.json({ ok: false });
    } else {
      res.cookie("jid", createRefreshToken(_user), cookieConf);

      return res.json({
        ok: true,
        user: {
          id: _user._id,
          name: _user.name,
          lastname: _user.lastname,
          user: _user.user,
          gender: _user.gender,
          role: _user.role.name,
          token: createAcessToken(_user),
        },
      });
    }
  }
  return res.status(401).json({ ok: false });
};

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, lastname, user, password, role, gender } = req.body;

  const _user2: User | null = await UserModel.findOne({ user });

  if (_user2 && _user2.user === user) {
    return res.json({ ok: false });
  } else {
    const _user: User = new UserModel({
      name,
      lastname,
      gender,
      user,
      password: await encryptPassword(password),
    });

    if (role) {
      const foundRole: Role | null = await RoleModel.findOne({ name: role });
      if (foundRole) _user.role = foundRole;
      else return res.json({ ok: false });
    } else {
      const roleD: Role | null = await RoleModel.findOne({ name: "driver" });
      _user.role = roleD!;
    }

    await _user.save();

    return res.json({
      ok: true,
      user: {
        id: _user._id,
        name: _user.name,
        lastname: _user.lastname,
        gender: _user.gender,
        user: _user.user,
        role: _user.role.name,
        token: createAcessToken(_user),
      },
    });
  }
};
