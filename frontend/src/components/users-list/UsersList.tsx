import { useEffect } from 'react';

// styles
import styles from '../../styles/modules/usersList.module.scss';

// query
import { useQuery } from 'react-query';

// api
import { getAllUsers } from '../../api/api';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { usersSlice } from '../../redux/slices/users.slice';

// models
import { User as IUser } from '../../models/user.model';

// components
import User from './user/User';

const UsersList: React.FC = (): JSX.Element => {
    // query
    const {
        isLoading,
        isError,
        error,
        data: usersList,
    } = useQuery<IUser[], Error>('users', getAllUsers);

    // redux
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users.users);
    const filteredUsers = useSelector(
        (state: RootState) => state.users.filteredUsers
    );

    // use effect
    useEffect(() => {
        dispatch(usersSlice.actions.setUsers(usersList));
    }, [dispatch, usersList]);

    return (
        <div className={`${styles['users-list']} d-flex flex-column`}>
            {/* Header */}

            <div
                className={`${styles['users-list-header']} align-items-center user-select-none`}
            >
                <p className="m-0">User</p>
                <p className="m-0">Phone</p>
                <p className="m-0">Action</p>
            </div>

            {/* Users list*/}

            <div>
                {isLoading && (
                    <div className="d-flex align-items-center justify-content-center mt-5">
                        <span className={styles.loader}></span>
                    </div>
                )}

                {isError && (
                    <p className={`${styles.error} user-select-none`}>
                        {error.message}
                    </p>
                )}

                {filteredUsers?.length > 0 &&
                    filteredUsers.map((user) => (
                        <User key={user._id} user={user} />
                    ))}

                {filteredUsers?.length < 1 &&
                    users &&
                    users.map((user, index) => (
                        <User key={user._id + index} user={user} />
                    ))}
            </div>
        </div>
    );
};

export default UsersList;
