import * as userService from '../services/userService';

// models
import { Request, Response } from 'express';
import { User } from '../models/user.model';

// get all users
const getAllUsers = (req: Request, res: Response): Response<User[]> => {
    const urlString: string = req.url;

    const users: User[] = userService.getAllUsers(urlString);

    return res.status(200).json(users);
};

// get single user
const getSignleUser = (req: Request, res: Response) => {
    res.json('getSignleUser');
};

// create user
const createUser = (req: Request, res: Response) => {
    res.json('createUser');
};

// update user
const updateUser = (req: Request, res: Response) => {
    res.json('updateUser');
};

// delete user
const deleteUser = (req: Request, res: Response) => {
    res.json('deleteUser');
};

export { getAllUsers, getSignleUser, createUser, updateUser, deleteUser };
