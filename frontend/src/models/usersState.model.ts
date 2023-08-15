import { User } from './user.model';

export interface UsersState {
    users: User[];
    filteredUsers: User[];
}
