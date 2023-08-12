import express, { Router } from 'express';

import {
    getAllUsers,
    getSignleUser,
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/userController';

// express router
const router: Router = express.Router();

// routes
router.get('/', getAllUsers);
router.get('/:id', getSignleUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export { router as userRoutes };
