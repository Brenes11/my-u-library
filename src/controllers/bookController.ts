// /src/controllers/bookController.ts

import { Request, Response } from 'express';
import { getUserRole } from '../service/userService';
import { createBook, getAllBooks, getBookById } from '../service/bookService';

export const createBookController = async (req: Request, res: Response) => {
  try {
    const { title, author, published_year, genre, stock, userId } = req.body;
    //

    const newBook = await createBook({ title, author, published_year, genre, stock });
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export const getBooksController = async (req: Request, res: Response) => {
  try {
    const books = await getAllBooks(req.query);
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export const getBookByIdController = async (req: Request, res: Response) => {
  try {
    const book = await getBookById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
