import url from 'url';

import { usersData } from '../data/usersData';

import { v4 as uuidv4 } from 'uuid';

// models
import { User } from '../models/user.model';
import { ParsedUrlQuery } from 'querystring';
import { CreateUserDTO, UpdateUserDTO } from '../models/user.dto';

// repository
class UserRepository {
    private users: User[] = [];

    constructor() {
        this.users = usersData;
    }

    // get all users
    public getAllUsers(urlString: string): User[] {
        try {
            const { query }: { query: ParsedUrlQuery } = url.parse(
                urlString,
                true
            );

            // if query retrieve filtered users based on query, if not retrieve all users
            if (query.email || query.phoneNumber) {
                const filteredUsers: User[] = this.users.filter(
                    (user: User) =>
                        user.email === query.email ||
                        user.phoneNumber === query.phoneNumber
                );

                return filteredUsers;
            }

            return this.users;
        } catch (err) {
            console.log({ error: err });

            throw new Error('Unable to retrieve users');
        }
    }

    // get single user
    public getSingleUser(id: string): User {
        try {
            // retrieve user based on id
            const filteredUser: User = usersData.filter(
                (user: User) => user._id === id
            )[0];

            return filteredUser;
        } catch (err) {
            console.log({ error: err });

            throw new Error('No such user');
        }
    }

    // create user
    public createUser(user: CreateUserDTO): User {
        try {
            // generate new user based on payload and add to database
            const newUser: User = {
                _id: uuidv4(),
                ...user,
            };

            this.users = [...this.users, newUser];

            return newUser;
        } catch (err) {
            console.log({ error: err });

            throw new Error('Unable to create user');
        }
    }

    // update user
    public updateUser(payload: UpdateUserDTO, id: string): User {
        try {
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
        } catch (err) {
            console.log({ error: err });

            throw new Error('Unable to update user');
        }
    }

    // delete user
    public deleteUser() {}
}

const userRepository: UserRepository = new UserRepository();

export { userRepository };
