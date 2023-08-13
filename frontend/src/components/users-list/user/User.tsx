import styles from '../../../styles/modules/user.module.scss';

// components
import Avatar from '../avatar/Avatar';
import { ReactComponent as EmailSVG } from '../../../assets/svg/email.svg';
import { ReactComponent as PhoneSVG } from '../../../assets/svg/phone.svg';
import { ReactComponent as EditSVG } from '../../../assets/svg/edit.svg';
import { ReactComponent as TrashSVG } from '../../../assets/svg/trash.svg';

const User: React.FC = (): JSX.Element => {
    return (
        <div className={`${styles.user} align-items-center`}>
            <div
                className={`${styles['user-name-container']} d-flex align-items-center`}
            >
                {/* Avatar */}

                <div className={styles['avatar-container']}>
                    <Avatar />
                </div>

                {/* Name Email */}

                <div
                    className={`${styles['name-email-container']} d-flex flex-column justify-content-center`}
                >
                    <p className="m-0">Sergej Barbarez</p>

                    <div className="d-flex align-items-center">
                        <EmailSVG className={styles['email-icon']} />

                        <p className="m-0">serga@yahoo.com</p>
                    </div>
                </div>
            </div>

            {/* Phone */}

            <div
                className={`${styles['phone-container']} d-flex align-items-center`}
            >
                <PhoneSVG className={styles['phone-icon']} />

                <p className="m-0">202-555-333</p>
            </div>

            {/* Action */}

            <div
                className={`${styles['action-container']} d-flex align-items-center justify-content-end`}
            >
                <EditSVG className={styles['edit-icon']} />

                <TrashSVG className={styles['trash-icon']} />
            </div>
        </div>
    );
};

export default User;
