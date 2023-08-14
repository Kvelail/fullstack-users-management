import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './styles/modules/app.module.scss';

// components
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';

const App: React.FC = (): JSX.Element => {
    return (
        <div
            className={`${styles.app} d-flex flex-column align-items-center container-fluid`}
        >
            <Navbar />

            <Home />
        </div>
    );
};

export default App;
