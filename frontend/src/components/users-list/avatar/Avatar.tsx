import styles from '../../../styles/modules/avatar.module.scss';

// components
import { ReactComponent as AvatarSVG } from '../../../assets/svg/avatar.svg';

const Avatar: React.FC = (): JSX.Element => {
    return (
        <div
            className={`${styles.avatar} d-flex justify-content-center align-items-center`}
        >
            <AvatarSVG className={styles['avatar-icon']} />
        </div>
    );
};

export default Avatar;
