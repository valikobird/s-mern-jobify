import User from '../models/UserModel.js';
import { StatusCodes } from 'http-status-codes';

export const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user.userId);
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'get application stats' });
};

export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;

  await User.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ msg: 'update user' });
};
