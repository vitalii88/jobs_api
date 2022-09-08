import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please, provide name'],
    minLength: 3,
    maxLength: 30,
  },
  email: {
    type: String,
    required: [true, 'Please, provide name'],
    matches: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please, provide valide email',
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please, provide password'],
    minLength: 3,
    maxLength: 20,
  }
});

export default mongoose.model('User', UserSchema);
