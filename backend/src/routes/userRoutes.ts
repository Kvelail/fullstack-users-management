import express, { Router } from 'express';

import {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/userController';

import { createOrUpdateUserSchema } from '../middleware/createOrUpdateUser.schema';

// express router
const router: Router = express.Router();

// routes
router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', createOrUpdateUserSchema, createUser);
router.put('/:id', createOrUpdateUserSchema, updateUser);
router.delete('/:id', deleteUser);

export { router as userRoutes };
