import styles from '../../styles/modules/userForm.module.scss';

// components
import UsersFormInput from './users-form-input/UsersFormInput';

const UsersForm: React.FC = (): JSX.Element => {
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
                <form>
                    <UsersFormInput placeholder="First Name" />
                    <UsersFormInput placeholder="Last Name" />
                    <UsersFormInput placeholder="Email" />
                    <UsersFormInput placeholder="Phone Number" />

                    <div className="d-flex justify-content-end">
                        <button>Add User</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UsersForm;
