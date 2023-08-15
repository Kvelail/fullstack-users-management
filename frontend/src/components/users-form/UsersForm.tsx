import { FormEvent, useCallback, useEffect, useState } from 'react';

// styles
import styles from '../../styles/modules/userForm.module.scss';

// api
import { createUser } from '../../api/api';

// models
import { UserForm } from '../../models/userFormInput.model';

// enum
import { ConstantString } from '../../enum/constantString.enum';

// redux
import { useDispatch } from 'react-redux';
import { usersSlice } from '../../redux/slices/users.slice';

// components
import UsersFormInput from './users-form-input/UsersFormInput';

const UsersForm: React.FC = (): JSX.Element => {
    // state
    const [formValue, setFormValue] = useState<UserForm>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });
    const [isDisabled, setIsDisabled] = useState(true);

    // redux
    const dispatch = useDispatch();

    // functions
    const checkIfThereAreEmptyInputs = useCallback(() => {
        for (let key in formValue) {
            if (formValue[key as keyof typeof formValue] === '') {
                return true;
            }
        }

        return false;
    }, [formValue]);

    // inputs
    const handleInputChange = (value: string, inputType: string): void => {
        // update form value state property based on inputType
        if (inputType === ConstantString.FIRST_NAME) {
            setFormValue((prevState) => ({
                ...prevState,
                firstName: value,
            }));
        }

        if (inputType === ConstantString.LAST_NAME) {
            setFormValue((prevState) => ({
                ...prevState,
                lastName: value,
            }));
        }

        if (inputType === ConstantString.EMAIL) {
            setFormValue((prevState) => ({
                ...prevState,
                email: value,
            }));
        }

        if (inputType === ConstantString.PHONE) {
            setFormValue((prevState) => ({
                ...prevState,
                phoneNumber: value,
            }));
        }
    };

    // form
    const handleFormSubmit = async (
        e: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        // check if there are empty inputs
        const hasEmptyInputs = checkIfThereAreEmptyInputs();

        if (hasEmptyInputs) {
            return;
        }

        const createdUser = await createUser(formValue);

        if (createdUser) {
            // update store
            dispatch(usersSlice.actions.createUser(formValue));

            // reset form
            setFormValue((prevState) => ({
                ...prevState,
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
            }));
        }
    };

    // use effect
    useEffect(() => {
        // check if there are empty inputs, if no enable form button
        const hasEmptyInputs = checkIfThereAreEmptyInputs();

        if (!hasEmptyInputs) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [formValue, checkIfThereAreEmptyInputs]);

    return (
        <div
            className={`${styles['users-form']} d-flex flex-column justify-content-center`}
        >
            {/* Header */}

            <div
                className={`${styles['users-form-header']} d-flex align-items-center justify-content-end user-select-none`}
            >
                <p className="m-0">New User</p>
            </div>

            {/* Form */}

            <div
                className={`${styles['users-form-input-container']} d-flex flex-column justify-content-center`}
            >
                <form onSubmit={(e) => handleFormSubmit(e)}>
                    <UsersFormInput
                        placeholder="First Name"
                        value={formValue?.firstName}
                        handleInputChange={handleInputChange}
                    />
                    <UsersFormInput
                        placeholder="Last Name"
                        value={formValue?.lastName}
                        handleInputChange={handleInputChange}
                    />
                    <UsersFormInput
                        placeholder="Email"
                        value={formValue?.email}
                        handleInputChange={handleInputChange}
                    />
                    <UsersFormInput
                        placeholder="Phone"
                        value={formValue?.phoneNumber}
                        handleInputChange={handleInputChange}
                    />

                    <div className="d-flex justify-content-end">
                        <button className={isDisabled ? styles.disabled : ''}>
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UsersForm;
