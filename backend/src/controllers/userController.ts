import { Request, Response } from 'express';

import * as userService from '../services/userService';

// get all users
const getAllUsers = (req: Request, res: Response) => {
    res.json('getAllUsers');
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
