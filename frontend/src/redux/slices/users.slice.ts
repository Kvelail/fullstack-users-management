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
        updateUsers: (state, action) => {
            state.users = action.payload;
        },
        updateFilteredUsers: (state, action) => {
            state.filteredUsers = action.payload;
        },
    },
});

export const { updateUsers, updateFilteredUsers } = usersSlice.actions;

export default usersSlice.reducer;
