import Checkout from '../models/Checkout';
import Book from '../models/Book';

interface CheckoutBookDTO {
  book_id: string;
  user_id: string;
}

export const checkoutBook = async ({ book_id, user_id }: CheckoutBookDTO) => {
  const book = await Book.findById(book_id);
  if (!book || book.stock <= 0) {
    throw new Error('Book not available');
  }

  const newCheckout = new Checkout({ book_id, user_id });
  await newCheckout.save();

  book.stock -= 1;
  await book.save();

  return newCheckout;
};

export const returnBook = async (checkoutId: string) => {
  const checkout = await Checkout.findById(checkoutId);
  if (!checkout || checkout.status !== 'Checked Out') {
    throw new Error('Invalid checkout ID or book already returned');
  }

  const book = await Book.findById(checkout.book_id);
  if (!book) {
    throw new Error('Book not found');
  }

  checkout.status = 'Returned';
  checkout.return_date = new Date();
  await checkout.save();

  book.stock += 1;
  await book.save();

  return checkout;
};

export const getCheckoutDetails = async () => {
    const checkout = await Checkout.find()
      .populate('book_id', 'title author published_year genre')
      .populate('user_id', 'first_name last_name email');
  
    if (!checkout) {
      throw new Error('Checkout not found');
    }
  
    return checkout;
  };

export const getCheckouts = async () => {
  return await Checkout.find().populate('book_id user_id');
};
