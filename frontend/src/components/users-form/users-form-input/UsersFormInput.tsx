import styles from '../../../styles/modules/usersFormInput.module.scss';

import { UsersFormInputProps } from '../../../models/usersFormInputProps.model';

const UsersFormInput: React.FC<UsersFormInputProps> = ({
    placeholder,
}): JSX.Element => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className={styles['users-form-input']}
        />
    );
};

export default UsersFormInput;
