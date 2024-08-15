// /src/controllers/userController.ts

import { Request, Response } from 'express';
import { createUser, getUserRole, getAllUsers } from '../service/userService';

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, email, role, user_id } = req.body;
    const userRole = await getUserRole(user_id);
    if (userRole !== 'Librarian') {
      return res.status(403).send({ message: 'Forbidden' });
    }

    const newUser = await createUser({ first_name, last_name, email, role });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
