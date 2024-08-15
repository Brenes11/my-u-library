import User from '../models/User';

interface CreateUserDTO {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

export const createUser = async (userData: CreateUserDTO) => {
  const newUser = new User(userData);
  return await newUser.save();
};

export const getUserRole = async (userId: string) => {
  try {
    const user = await User.findById(userId);
    return user ? user.role : null;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async () => {
  return await User.find();
};
