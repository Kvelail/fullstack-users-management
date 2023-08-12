import { userRepository } from '../repository/userRepository';

// models
import { User } from '../models/user.model';

// get all users
const getAllUsers = (urlString: string): User[] => {
    return userRepository.getAllUsers(urlString);
};

// get single user
const getSignleUser = () => {
    console.log('getSignleUser');
};

// create user
const createUser = () => {
    console.log('createUser');
};

// update user
const updateUser = () => {
    console.log('updateUser');
};

// delete user
const deleteUser = () => {
    console.log('deleteUser');
};

export { getAllUsers, getSignleUser, createUser, updateUser, deleteUser };
