import { useState } from 'react';

import styles from '../../styles/modules/usersList.module.scss';

// components
import User from './user/User';

const UsersList: React.FC = (): JSX.Element => {
    const [usersList, setUsersList] = useState([1, 2, 3, 4]);

    return (
        <div
            className={`${styles['users-list']} d-flex flex-column justify-content-center`}
        >
            {/* Header */}

            <div
                className={`${styles['users-list-header']} align-items-center user-select-none`}
            >
                <p className="m-0">User</p>
                <p className="m-0">Phone</p>
                <p className="m-0">Action</p>
            </div>

            {/* Users */}

            <div>
                {usersList && usersList.map((user) => <User key={user} />)}
            </div>
        </div>
    );
};

export default UsersList;
