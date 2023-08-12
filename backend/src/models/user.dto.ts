export interface CreateUserDTO {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export interface UpdateUserDTO extends CreateUserDTO {}
