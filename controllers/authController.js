import User from '../models/UserModel.js';
import { StatusCodes } from 'http-status-codes';
import { USER_ROLES } from '../utils/constants.js';
import { hashPassword } from '../utils/passwordUtils.js';

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? USER_ROLES.ADMIN : USER_ROLES.USER;

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: 'User registered' });
};

export const login = (req, res) => {
  res.send('login');
};
