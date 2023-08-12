import { userRepository } from '../repository/userRepository';

// models
import { User } from '../models/user.model';
import { CreateUserDTO, UpdateUserDTO } from '../models/user.dto';

// get all users
const getAllUsers = (urlString: string): User[] => {
    return userRepository.getAllUsers(urlString);
};

// get single user
const getSingleUser = (id: string): User => {
    return userRepository.getSingleUser(id);
};

// create user
const createUser = (payload: CreateUserDTO): User => {
    return userRepository.createUser(payload);
};

// update user
const updateUser = (payload: UpdateUserDTO, id: string): User => {
    return userRepository.updateUser(payload, id);
};

// delete user
const deleteUser = (id: string): boolean => {
    return userRepository.deleteUser(id);
};

export { getAllUsers, getSingleUser, createUser, updateUser, deleteUser };
