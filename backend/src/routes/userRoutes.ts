import express, { Router } from 'express';

import {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/userController';

// express router
const router: Router = express.Router();

// routes
router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export { router as userRoutes };
