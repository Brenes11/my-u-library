import Book from '../models/Book';

interface CreateBookDTO {
  title: string;
  author: string;
  published_year: number;
  genre: string;
  stock: number;
}

export const createBook = async (bookData: CreateBookDTO) => {
  const newBook = new Book(bookData);
  return await newBook.save();
};

export const getAllBooks = async (query: any) => {
  const filters: any = {};

  if (query.title) {
    filters.title = { $regex: query.title as string, $options: 'i' };
  }

  if (query.author) {
    filters.author = { $regex: query.author as string, $options: 'i' };
  }

  if (query.genre) {
    filters.genre = { $regex: query.genre as string, $options: 'i' };
  }

  return await Book.find(filters);
};

export const getBookById = async (id: string) => {
  return await Book.findById(id);
};
