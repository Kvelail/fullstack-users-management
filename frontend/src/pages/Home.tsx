import styles from '../styles/modules/home.module.scss';

// components
import UsersList from '../components/users-list/UsersList';
import UsersForm from '../components/users-form/UsersForm';

const Home: React.FC = (): JSX.Element => {
    return (
        <div className={styles['home-container']}>
            <UsersList />

            <UsersForm />
        </div>
    );
};

export default Home;
