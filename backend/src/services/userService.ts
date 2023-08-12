import { userRepository } from '../repository/userRepository';

// models
import { User } from '../models/user.model';
import { CreateUserDTO } from '../models/user.dto';

// get all users
const getAllUsers = (urlString: string): User[] => {
    return userRepository.getAllUsers(urlString);
};

// get single user
const getSingleUser = (id: string): User => {
    return userRepository.getSingleUser(id);
};

// create user
const createUser = (payload: CreateUserDTO) => {
    return userRepository.createUser(payload);
};

// update user
const updateUser = () => {
    console.log('updateUser');
};

// delete user
const deleteUser = () => {
    console.log('deleteUser');
};

export { getAllUsers, getSingleUser, createUser, updateUser, deleteUser };
