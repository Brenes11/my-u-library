import mongoose, { Document, Schema } from 'mongoose';

export interface ICheckout extends Document {
  book_id: mongoose.Types.ObjectId;
  user_id: mongoose.Types.ObjectId;
  checkout_date: Date;
  return_date?: Date;
  status: string;
  created_at: Date;
  updated_at: Date;
}

const CheckoutSchema: Schema = new Schema({
  book_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  checkout_date: { type: Date, default: Date.now, required: true },
  return_date: { type: Date },
  status: { type: String, required: true, default: 'Checked Out' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export default mongoose.model<ICheckout>('Checkout', CheckoutSchema);
