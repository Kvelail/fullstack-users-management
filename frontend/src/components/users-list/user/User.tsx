import { useState } from 'react';

// styles
import styles from '../../../styles/modules/user.module.scss';

// api
import { deleteUser, getSingleUser, updateUser } from '../../../api/api';

// models
import { UserProps } from '../../../models/userProps.model';
import { UserInfo } from '../../../models/userInfo.model';

// enum
import { ConstantString } from '../../../enum/constantString.enum';

// redux
import { useDispatch } from 'react-redux';
import { usersSlice } from '../../../redux/slices/users.slice';

// components
import Avatar from '../avatar/Avatar';
import UsersFormInput from '../../users-form/users-form-input/UsersFormInput';
import { ReactComponent as EmailSVG } from '../../../assets/svg/email.svg';
import { ReactComponent as PhoneSVG } from '../../../assets/svg/phone.svg';
import { ReactComponent as EditSVG } from '../../../assets/svg/edit.svg';
import { ReactComponent as TrashSVG } from '../../../assets/svg/trash.svg';
import { ReactComponent as ConfirmSVG } from '../../../assets/svg/confirm.svg';

const User: React.FC<UserProps> = ({ user }): JSX.Element => {
    // state
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<UserInfo>({
        fullName: '',
        email: '',
        phoneNumber: '',
    });

    // redux
    const dispatch = useDispatch();

    // inputs
    const handleInputChange = (value: string, inputType: string): void => {
        // update user state property based on inputType
        if (inputType === ConstantString.FULL_NAME) {
            setUserInfo((prevState) => ({
                ...prevState,
                fullName: value,
            }));
        }

        if (inputType === ConstantString.EMAIL) {
            setUserInfo((prevState) => ({
                ...prevState,
                email: value,
            }));
        }

        if (inputType === ConstantString.PHONE) {
            setUserInfo((prevState) => ({
                ...prevState,
                phoneNumber: value,
            }));
        }
    };

    // buttons
    const handleEditClick = async (userId: string): Promise<void> => {
        setIsEditing((isEditing) => !isEditing);

        const user = await getSingleUser(userId);
        const filteredUserInfo = {
            fullName: `${user?.firstName} ${user?.lastName}`,
            email: user?.email,
            phoneNumber: user?.phoneNumber,
        };

        setUserInfo((prevState) => ({
            ...prevState,
            ...filteredUserInfo,
        }));
    };

    const handleSaveClick = async (userId: string): Promise<void> => {
        const newUserInfo = {
            ...userInfo,
        };

        const updatedUser = await updateUser(newUserInfo, userId);
        const filteredUpdatedUser: UserInfo = {
            fullName: `${updatedUser?.firstName} ${updatedUser?.lastName}`,
            email: updatedUser?.email,
            phoneNumber: updatedUser?.phoneNumber,
        };

        // update store
        dispatch(usersSlice.actions.updateUsers({ updatedUser, id: userId }));

        // update state
        setUserInfo((prevState) => ({
            ...prevState,
            ...filteredUpdatedUser,
        }));

        setIsEditing((isEditing) => !isEditing);
    };

    const handleDeleteClick = async (userId: string): Promise<void> => {
        const userDeleted = await deleteUser(userId);

        if (userDeleted) {
            // update store
            dispatch(usersSlice.actions.deleteUser({ id: userId }));
        }
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
                    {!isEditing && (
                        <p className="m-0">
                            {user?.firstName} {user?.lastName}
                        </p>
                    )}
                    {isEditing && (
                        <UsersFormInput
                            placeholder="Full Name"
                            paddingOff
                            value={userInfo?.fullName}
                            handleInputChange={handleInputChange}
                        />
                    )}

                    <div className="d-flex align-items-center">
                        <EmailSVG className={styles['email-icon']} />

                        {!isEditing && <p className="m-0">{user?.email}</p>}
                        {isEditing && (
                            <UsersFormInput
                                placeholder="Email"
                                paddingOff
                                value={userInfo?.email}
                                handleInputChange={handleInputChange}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Phone */}

            <div
                className={`${styles['phone-container']} d-flex align-items-center`}
            >
                <PhoneSVG className={styles['phone-icon']} />

                {!isEditing && <p className="m-0">{user?.phoneNumber}</p>}
                {isEditing && (
                    <UsersFormInput
                        placeholder="Phone"
                        paddingOff
                        value={userInfo?.phoneNumber}
                        handleInputChange={handleInputChange}
                    />
                )}
            </div>

            {/* Action */}

            <div
                className={`${styles['action-container']} d-flex align-items-center justify-content-end`}
            >
                <button onClick={() => handleEditClick(user?._id)}>
                    {!isEditing && <EditSVG className={styles['edit-icon']} />}
                </button>

                <button onClick={() => handleSaveClick(user?._id)}>
                    {isEditing && (
                        <ConfirmSVG className={styles['confirm-icon']} />
                    )}
                </button>

                <button onClick={() => handleDeleteClick(user?._id)}>
                    <TrashSVG className={styles['trash-icon']} />
                </button>
            </div>
        </div>
    );
};

export default User;
