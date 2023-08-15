import { createSlice } from '@reduxjs/toolkit';

import { UsersState } from '../../models/usersState.model';

const initialState: UsersState = {
    users: [],
    filteredUsers: [],
};

const name = 'users';

export const usersSlice = createSlice({
    name,
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setFilteredUsers: (state, action) => {
            state.filteredUsers = action.payload;
        },
        updateUsers: (state, action) => {
            state.users = state.users.map((user) => {
                if (user._id === action.payload.id) {
                    return {
                        ...action.payload.updatedUser,
                    };
                }

                return user;
            });
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(
                (user) => user._id !== action.payload.id
            );
        },
    },
});

export const { setUsers, setFilteredUsers, updateUsers, deleteUser } =
    usersSlice.actions;

export default usersSlice.reducer;
