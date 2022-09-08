import UserSchema from '../models/User.js';

export const register = async (req, resp) => {
  resp.send('Register user')
};

export const login = async (req, resp) => {
  resp.send('Login user')
};


