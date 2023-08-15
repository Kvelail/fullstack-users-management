import axios, { AxiosError } from 'axios';

// models
import { User } from '../models/user.model';
import { UserInfo } from '../models/userInfo.model';
import { UserForm } from '../models/userFormInput.model';

// get all users
const getAllUsers = async (): Promise<User[] | undefined> => {
    try {
        const response = await axios.get('/api/users');

        return response.data;
    } catch (err) {
        if (err instanceof AxiosError) {
            console.log(err.message);
            console.log(err?.response?.data);
        }
    }
};

// get user by email or phone number
const getUserByEmailOrPhone = async (
    email: string | null,
    phoneNumber: string | null
): Promise<User | undefined> => {
    try {
        const response = await axios.get('/api/users/', {
            params: {
                ...(email ? { email } : {}),
                ...(phoneNumber ? { phoneNumber } : {}),
            },
        });

        return response.data;
    } catch (err) {
        if (err instanceof AxiosError) {
            console.log(err.message);
            console.log(err?.response?.data);
        }
    }
};

// get single user
const getSingleUser = async (id: string): Promise<User | undefined> => {
    try {
        const response = await axios.get(`/api/users/${id}`);

        return response.data;
    } catch (err) {
        if (err instanceof AxiosError) {
            console.log(err.message);
            console.log(err?.response?.data);
        }
    }
};

// create user
const createUser = async (payload: UserForm): Promise<User | undefined> => {
    try {
        const response = await axios.post(
            '/api/users/',
            {
                ...payload,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data;
    } catch (err) {
        console.log({ error: err });

        if (err instanceof AxiosError) {
            console.log(err.message);
            console.log(err?.response?.data);
        }
    }
};

// update user
const updateUser = async (
    payload: UserInfo,
    id: string
): Promise<User | undefined> => {
    try {
        const splitFullName = payload.fullName?.split(' ');

        const changedPayload = {
            firstName: splitFullName && splitFullName[0],
            lastName: splitFullName && splitFullName[1],
            email: payload.email,
            phoneNumber: payload.phoneNumber,
        };

        const response = await axios({
            method: 'put',
            url: `/api/users/${id}`,
            headers: { 'Content-Type': 'application/json' },
            data: {
                ...changedPayload,
            },
        });

        return response.data;
    } catch (err) {
        if (err instanceof AxiosError) {
            console.log(err.message);
            console.log(err?.response?.data);
        }
    }
};

// delete user
const deleteUser = async (id: string): Promise<boolean | undefined> => {
    try {
        const response = await axios.delete(`/api/users/${id}`);

        return response.data;
    } catch (err) {
        if (err instanceof AxiosError) {
            console.log(err.message);
            console.log(err?.response?.data);
        }
    }
};

export {
    getAllUsers,
    getUserByEmailOrPhone,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
};
