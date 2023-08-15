import { usersData } from '../data/usersData';

import { v4 as uuidv4 } from 'uuid';

// models
import { User } from '../models/user.model';
import { CreateUserDTO, UpdateUserDTO } from '../models/user.dto';
import { UserQuery } from '../models/userQuery.model';

// repository
class UserRepository {
    private users: User[] = [];

    constructor() {
        this.users = usersData;
    }

    // get all users
    public getAllUsers(query: UserQuery): User[] {
        // if query retrieve filtered users based on query, if not retrieve all users
        if (query?.email ?? query?.phoneNumber) {
            const filteredUsers: User[] = this.users.filter(
                (user: User) =>
                    user.email === query.email ||
                    user.phoneNumber === query.phoneNumber
            );

            return filteredUsers;
        }

        return this.users;
    }

    // get single user
    public getSingleUser(id: string): User | undefined {
        // retrieve user based on id
        const filteredUser: User | undefined = usersData.find(
            (user: User) => user._id === id
        );

        return filteredUser;
    }

    // get user by email
    public getByEmail(email: string): User | undefined {
        return this.users.find((user: User) => user.email === email);
    }

    // create user
    public createUser(user: CreateUserDTO): User {
        // generate new user based on payload and add to database
        const newUser: User = {
            _id: uuidv4(),
            ...user,
        };

        this.users = [...this.users, newUser];

        return newUser;
    }

    // update user
    public updateUser(payload: UpdateUserDTO, id: string): User {
        let index: number = 0;

        // find user based on id and update
        this.users = this.users.map((user: User, indx: number) => {
            if (user._id === id) {
                // get updated user index
                index = indx;

                return {
                    _id: user._id,
                    ...payload,
                };
            }

            return user;
        });

        const updatedUser: User = this.users[index];

        return updatedUser;
    }

    // delete user
    public deleteUser(id: string): boolean {
        // check if there is user available
        const user: User | undefined = this.users.find(
            (user: User) => user._id === id
        );

        if (!user) {
            return false;
        }

        // remove user based on id
        this.users = this.users.filter((user: User) => user._id !== id);

        return true;
    }
}

const userRepository: UserRepository = new UserRepository();

export { userRepository };
