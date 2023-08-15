import { useState } from 'react';

// styles
import styles from '../../styles/modules/navbar.module.scss';

// api
import { getUserByEmailOrPhone } from '../../api/api';

// redux
import { useDispatch } from 'react-redux';
import { usersSlice } from '../../redux/slices/users.slice';

// models
import { User } from '../../models/user.model';

// components
import { ReactComponent as SearchSVG } from '../../assets/svg/search.svg';

const Navbar: React.FC = (): JSX.Element => {
    // state
    const [searchValue, setsearchValue] = useState<string>('');

    // redux
    const dispatch = useDispatch();

    // input
    const handleInputChange = async (value: string) => {
        setsearchValue(value);

        // regex test for email and phone number format
        const isEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
            value
        );
        const isPhoneNumber =
            /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(value);

        // search users by passed test
        if (isEmail || isPhoneNumber) {
            let users: User | null = null;

            if (isEmail) {
                users = await getUserByEmailOrPhone(value, null);
            }

            if (isPhoneNumber) {
                users = await getUserByEmailOrPhone(null, value);
            }

            dispatch(usersSlice.actions.updateFilteredUsers(users));
        } else {
            dispatch(usersSlice.actions.updateFilteredUsers([]));
        }
    };

    return (
        <nav className={`${styles.navbar} navbar-expand-lg`}>
            <div className="d-flex align-items-center justify-content-between w-100">
                {/* Search input */}

                <div className={`${styles.search} d-flex align-items-center`}>
                    <SearchSVG className={styles['search-icon']} />

                    <input
                        type="text"
                        placeholder="Enter email or phone..."
                        className={styles['search-input']}
                        value={searchValue}
                        onChange={(e) => handleInputChange(e.target.value)}
                    />
                </div>

                {/* Title */}

                <div className="d-flex align-items-center user-select-none">
                    <a href="/">
                        <h2 className="m-0">
                            USERS <span>Management</span>
                        </h2>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
