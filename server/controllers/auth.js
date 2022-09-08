import UserSchema from '../models/User.js';
import { StatusCodes } from 'http-status-codes';

export const register = async (req, resp) => {
  const user =  await UserSchema.create({ ...req.body });
  const token = user.createJWT();

  resp.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
    },
    token,
  });
};

export const login = async (req, resp) => {
  resp.send('Login user')
};

