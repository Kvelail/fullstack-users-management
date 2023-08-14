import { useState } from 'react';

import styles from '../../../styles/modules/user.module.scss';

// components
import Avatar from '../avatar/Avatar';
import UsersFormInput from '../../users-form/users-form-input/UsersFormInput';
import { ReactComponent as EmailSVG } from '../../../assets/svg/email.svg';
import { ReactComponent as PhoneSVG } from '../../../assets/svg/phone.svg';
import { ReactComponent as EditSVG } from '../../../assets/svg/edit.svg';
import { ReactComponent as TrashSVG } from '../../../assets/svg/trash.svg';
import { ReactComponent as ConfirmSVG } from '../../../assets/svg/confirm.svg';

const User: React.FC = (): JSX.Element => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleEditClick = (): void => {
        setIsEditing((isEditing) => !isEditing);
    };

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
                    {!isEditing && <p className="m-0">Sergej Barbarez</p>}
                    {isEditing && (
                        <UsersFormInput placeholder="Full Name" paddingOff />
                    )}

                    <div className="d-flex align-items-center">
                        <EmailSVG className={styles['email-icon']} />

                        {!isEditing && <p className="m-0">serga@yahoo.com</p>}
                        {isEditing && (
                            <UsersFormInput placeholder="Email" paddingOff />
                        )}
                    </div>
                </div>
            </div>

            {/* Phone */}

            <div
                className={`${styles['phone-container']} d-flex align-items-center`}
            >
                <PhoneSVG className={styles['phone-icon']} />

                {!isEditing && <p className="m-0">202-555-333</p>}
                {isEditing && <UsersFormInput placeholder="Phone" paddingOff />}
            </div>

            {/* Action */}

            <div
                className={`${styles['action-container']} d-flex align-items-center justify-content-end`}
            >
                <button onClick={handleEditClick}>
                    {!isEditing && <EditSVG className={styles['edit-icon']} />}
                    {isEditing && (
                        <ConfirmSVG className={styles['confirm-icon']} />
                    )}
                </button>

                <TrashSVG className={styles['trash-icon']} />
            </div>
        </div>
    );
};

export default User;
