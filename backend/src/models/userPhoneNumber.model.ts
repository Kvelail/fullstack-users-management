interface UserPhoneNumber {
    email: string;
    phoneNumbers: [
        {
            type: string;
            value: string;
        }
    ];
}

export { UserPhoneNumber };
