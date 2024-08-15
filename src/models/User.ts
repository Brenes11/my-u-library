import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  created_at: Date;
  updated_at: Date;
}

const UserSchema: Schema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export default mongoose.model<IUser>('User', UserSchema);
