import { Request, Response } from 'express';
import { checkoutBook, returnBook, getCheckouts, getCheckoutDetails } from '../service/checkoutService';

export const getCheckoutDetailsController = async (req: Request, res: Response) => {
  try {
    const checkoutDetails = await getCheckoutDetails(req.params.id);
    res.json(checkoutDetails);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export const checkoutBookController = async (req: Request, res: Response) => {
  try {
    const { book_id, user_id } = req.body;
    const newCheckout = await checkoutBook({ book_id, user_id });
    res.status(201).json(newCheckout);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export const returnBookController = async (req: Request, res: Response) => {
  try {
    const checkout = await returnBook(req.params.id);
    res.json(checkout);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export const getCheckoutsController = async (req: Request, res: Response) => {
  try {
    const checkouts = await getCheckouts();
    res.json(checkouts);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
