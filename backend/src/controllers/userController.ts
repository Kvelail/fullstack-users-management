import * as userService from '../services/userService';

// models
import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { CreateUserDTO, UpdateUserDTO } from '../models/user.dto';

// get all users
const getAllUsers = (req: Request, res: Response): Response<User[]> => {
    const urlString: string = req.url;

    const users: User[] = userService.getAllUsers(urlString);

    if (!users) {
        return res.status(404).json({ error: 'Unable to retrieve users' });
    }

    return res.status(200).json(users);
};

// get single user
const getSingleUser = (req: Request, res: Response): Response<User> => {
    const id: string = req.params.id;

    if (!id) {
        return res.status(404).json({ error: 'No such user' });
    }

    const user: User = userService.getSingleUser(id);

    if (!user) {
        return res.status(404).json({ error: 'No such user' });
    }

    return res.status(200).json(user);
};

// create user
const createUser = (req: Request, res: Response): Response<User> => {
    const payload: CreateUserDTO = req.body;

    const user: User = userService.createUser(payload);

    if (!user) {
        return res.status(400).json({ error: 'Unable to create user' });
    }

    return res.status(201).json(user);
};

// update user
const updateUser = (req: Request, res: Response): Response<User> => {
    const id: string = req.params.id;

    if (!id) {
        return res.status(404).json({ error: 'No such user' });
    }

    const payload: UpdateUserDTO = req.body;

    const user: User = userService.updateUser(payload, id);

    if (!user) {
        return res.status(400).json({ error: 'No such user' });
    }

    return res.status(200).json(user);
};

// delete user
const deleteUser = (req: Request, res: Response): Response<boolean> => {
    const id: string = req.params.id;

    if (!id) {
        return res.status(404).json({ error: 'No such user' });
    }

    const userDeleted: boolean = userService.deleteUser(id);

    if (!userDeleted) {
        return res.status(404).json({ error: 'No such user' });
    }

    return res.status(200).json({ message: 'User deleted' });
};

export { getAllUsers, getSingleUser, createUser, updateUser, deleteUser };