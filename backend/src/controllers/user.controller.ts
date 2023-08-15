import * as userService from '../services/user.service';

// models
import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { CreateUserDTO, UpdateUserDTO } from '../models/user.dto';
import { UserQuery } from '../models/userQuery.model';

// get all users
const getAllUsers = (req: Request, res: Response): Response<User[]> => {
    try {
        const query: UserQuery = req.query;

        const users = userService.getAllUsers(query);

        if (!users) {
            return res.status(404).json({ error: 'Unable to retrieve users' });
        }

        return res.status(200).json(users);
    } catch (err) {
        console.log({ error: err });

        return res.status(500).send('Unable to retrieve users');
    }
};

// get single user
const getSingleUser = (req: Request, res: Response): Response<User> => {
    try {
        const id: string = req.params.id;

        const user = userService.getSingleUser(id);

        if (!user) {
            return res.status(404).json({ error: "User doesn't exist" });
        }

        return res.status(200).json(user);
    } catch (err) {
        console.log({ error: err });

        return res.status(500).send('Unable to retrieve user');
    }
};

// create user
const createUser = (req: Request, res: Response): Response<User> => {
    try {
        const payload: CreateUserDTO = req.body;

        const user = userService.createUser(payload);

        if (!user) {
            return res.status(409).send('User already exist');
        }

        return res.status(201).json(user);
    } catch (err) {
        console.log({ error: err });

        return res.status(500).send('Unable to create user');
    }
};

// update user
const updateUser = (req: Request, res: Response): Response<User> => {
    try {
        const payload: UpdateUserDTO = req.body;
        const id: string = req.params.id;

        const user = userService.updateUser(payload, id);

        if (!user) {
            return res.status(404).send("User doesn't exist");
        }

        return res.status(200).json(user);
    } catch (err) {
        console.log({ error: err });

        return res.status(500).send('Unable to update user');
    }
};

// delete user
const deleteUser = (req: Request, res: Response): Response<boolean> => {
    try {
        const id: string = req.params.id;

        const userDeleted = userService.deleteUser(id);

        if (!userDeleted) {
            return res.status(404).send(false);
        }

        return res.status(200).send(true);
    } catch (err) {
        console.log({ error: err });

        return res.status(500).send('Unable to delete user');
    }
};

export { getAllUsers, getSingleUser, createUser, updateUser, deleteUser };
