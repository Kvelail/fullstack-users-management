import express, { Router } from 'express';

import {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/user.controller';

// middlewares
import { createOrUpdateUserSchema } from '../middlewares/createOrUpdateUser.schema';
import { validateQuery } from '../middlewares/validateQuery.schema';

// express router
const router: Router = express.Router();

// routes
router.get('/', getAllUsers);
router.get('/:id', validateQuery, getSingleUser);
router.post('/', createOrUpdateUserSchema, createUser);
router.put('/:id', [validateQuery, createOrUpdateUserSchema], updateUser);
router.delete('/:id', validateQuery, deleteUser);

export { router as userRoutes };
