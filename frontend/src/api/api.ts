import axios from 'axios';

import { User } from '../models/user.model';

// get all users
const getAllUsers = async (): Promise<User[]> => {
    const response = await axios.get('/api/users');

    return response.data;
};

// get user by email or phone number
const getUserByEmailOrPhone = async (
    email: string | null,
    phoneNumber: string | null
): Promise<User> => {
    const response = await axios.get('/api/users/', {
        params: {
            ...(email ? { email } : {}),
            ...(phoneNumber ? { phoneNumber } : {}),
        },
    });

    return response.data;
};

// get single user
const getSingleUser = async (id: string): Promise<User> => {
    const response = await axios.get(`/api/users/${id}`);

    return response.data;
};

export { getAllUsers, getUserByEmailOrPhone, getSingleUser };
