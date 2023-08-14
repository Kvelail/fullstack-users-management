import { userRepository } from '../repositories/user.repository';

// models
import { User } from '../models/user.model';
import { CreateUserDTO, UpdateUserDTO } from '../models/user.dto';
import { UserQuery } from '../models/userQuery.model';

// get all users
const getAllUsers = (query: UserQuery): User[] => {
    return userRepository.getAllUsers(query);
};

// get single user
const getSingleUser = (id: string): User | undefined => {
    return userRepository.getSingleUser(id);
};

// create user
const createUser = (payload: CreateUserDTO): User => {
    const user = userRepository.getByEmail(payload.email);

    if (user) {
        throw new Error('User already exists');
    }

    return userRepository.createUser(payload);
};

// update user
const updateUser = (payload: UpdateUserDTO, id: string): User => {
    const user = userRepository.getSingleUser(id);

    if (!user) {
        throw new Error("User doesn't exist");
    }

    return userRepository.updateUser(payload, id);
};

// delete user
const deleteUser = (id: string): boolean => {
    return userRepository.deleteUser(id);
};

export { getAllUsers, getSingleUser, createUser, updateUser, deleteUser };
