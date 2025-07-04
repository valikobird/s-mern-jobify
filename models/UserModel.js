import mongoose from 'mongoose';
import { USER_ROLES } from '../utils/constants.js';

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    lastName: {
      type: String,
      default: 'lastName',
    },
    location: {
      type: String,
      default: 'my city',
    },
    role: {
      type: String,
      enum: Object.values(USER_ROLES),
      default: 'user',
    },
    avatar: String,
    avatarPublicId: String,
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model('User', UserSchema);
