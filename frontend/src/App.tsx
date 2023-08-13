import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './styles/modules/app.module.scss';

// components
import Navbar from './components/navbar/Navbar';
import UsersList from './components/users-list/UsersList';

const App: React.FC = (): JSX.Element => {
    return (
        <div
            className={`${styles.app} d-flex flex-column align-items-center container-fluid`}
        >
            <Navbar />

            <div className={styles['app-main-container']}>
                <UsersList />

                <div>B</div>
            </div>
        </div>
    );
};

export default App;
