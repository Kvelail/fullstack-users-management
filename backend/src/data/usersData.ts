import { UserPhoneNumber } from '../models/userPhoneNumber.model';
import { UserEmail } from '../models/userEmail.model';
import { User } from '../models/user.model';

import { v4 as uuidv4 } from 'uuid';

// user phone number data
const userPhoneNumberData: UserPhoneNumber[] = [
    {
        email: 'marina@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0105',
            },
        ],
    },
    {
        email: 'kip@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0168',
            },
        ],
    },
    {
        email: 'lorie@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0162',
            },
        ],
    },
    {
        email: 'jasmin@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0168',
            },
        ],
    },
    {
        email: 'emma@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0187',
            },
        ],
    },
    {
        email: 'elvia@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0164',
            },
        ],
    },
    {
        email: 'liliana@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0161',
            },
        ],
    },
    {
        email: 'florencio@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0127',
            },
        ],
    },
    {
        email: 'delores@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0143',
            },
        ],
    },
];

// user emails data
const userEmailsData: UserEmail[] = [
    {
        email: 'delores@wiline.com',
        firstName: 'Delores',
        lastName: 'Mind',
    },
    {
        email: 'lorie@wiline.com',
        firstName: 'Lorie',
        lastName: 'Enak',
    },
    {
        email: 'emma@wiline.com',
        firstName: 'Emma',
        lastName: 'Fisk',
    },
];

// combined users data
let usersData: User[] = [];

for (let i: number = 0; i < userPhoneNumberData.length; i++) {
    const iEmail: string = userPhoneNumberData[i].email;

    for (let j: number = 0; j < userEmailsData.length; j++) {
        const jEmail: string = userEmailsData[j].email;

        // loop through two arrays and combine unique values
        if (jEmail === iEmail) {
            const user: User = {
                _id: uuidv4(),
                firstName: userEmailsData[j].firstName,
                lastName: userEmailsData[j].lastName,
                email: userEmailsData[j].email,
                phoneNumber: userPhoneNumberData[i].phoneNumbers[0].value,
            };

            usersData = [...usersData, user];
        }
    }
}

export { usersData };
