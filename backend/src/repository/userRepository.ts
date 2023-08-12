import url from 'url';

import { usersData } from '../data/usersData';

// models
import { User } from '../models/user.model';
import { ParsedUrlQuery } from 'querystring';

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
    public createUser() {}

    // update user
    public updateUser() {}

    // delete user
    public deleteUser() {}
}

const userRepository: UserRepository = new UserRepository();

export { userRepository };
