import styles from '../../styles/modules/navbar.module.scss';

import { ReactComponent as SearchSVG } from '../../assets/svg/search.svg';

const Navbar: React.FC = (): JSX.Element => {
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
