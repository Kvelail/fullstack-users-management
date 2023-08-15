import axios from 'axios';

// models
import { User } from '../models/user.model';
import { UserInfo } from '../models/userInfo.model';

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

// update user
const updateUser = async (payload: UserInfo, id: string): Promise<User> => {
    const splitFullName = payload.fullName.split(' ');

    const changedPayload = {
        firstName: splitFullName[0],
        lastName: splitFullName[1],
        email: payload.email,
        phoneNumber: payload.phoneNumber,
    };

    const response = await axios({
        method: 'put',
        url: `/api/users/${id}`,
        data: {
            ...changedPayload,
        },
    });

    return response.data;
};

export { getAllUsers, getUserByEmailOrPhone, getSingleUser, updateUser };
