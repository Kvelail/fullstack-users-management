import styles from '../../../styles/modules/usersFormInput.module.scss';

import { UsersFormInputProps } from '../../../models/usersFormInputProps.model';

const UsersFormInput: React.FC<UsersFormInputProps> = ({
    placeholder,
    paddingOff = false,
    value,
    handleInputChange,
}): JSX.Element => {
    return (
        <input
            spellCheck="false"
            type="text"
            placeholder={placeholder}
            className={`${styles['users-form-input']} ${
                paddingOff && styles['input-padding-off']
            }`}
            value={value}
            onChange={(e) =>
                handleInputChange &&
                handleInputChange(e.target.value, placeholder)
            }
        />
    );
};

export default UsersFormInput;
