import { Injectable } from '@angular/core';

export interface User {
    Id: number;
    Username: string;
    Email: string;
    RegistrationTime: string;
    LastLogin: string;
    Status: string;
}

@Injectable({
    providedIn: 'root',
})

export class UserService {
    user: User[] = [
        {
            Id: 1,
            Username: 'admin',
            Email: 'admin@somemail.com',
            RegistrationTime: '27-Nov-20 08:30',
            LastLogin: '27-Nov-20 09:00',
            Status: 'Confirmed'
        },
        {
            Id: 2,
            Username: 'officer',
            Email: 'officerl@somemail.com',
            RegistrationTime: '27-Nov-20 08:30',
            LastLogin: '27-Nov-20 09:00',
            Status: 'Confirmed'
        },
        {
            Id: 3,
            Username: 'admin',
            Email: 'admin@somemail.com',
            RegistrationTime: '27-Nov-20 08:30',
            LastLogin: '27-Nov-20 09:00',
            Status: 'Blocked'
        },
        {
            Id: 4,
            Username: 'officer',
            Email: 'officer@somemail.com',
            RegistrationTime: '27-Nov-20 08:30',
            LastLogin: '27-Nov-20 09:00',
            Status: 'Confirmed'
        },
        {
            Id: 5,
            Username: 'admin',
            Email: 'admin@somemail.com',
            RegistrationTime: '27-Nov-20 08:30',
            LastLogin: '27-Nov-20 09:00',
            Status: 'Confirmed'
        },
        {
            Id: 6,
            Username: 'officer',
            Email: 'officer@somemail.com',
            RegistrationTime: '27-Nov-20 08:30',
            LastLogin: '27-Nov-20 09:00',
            Status: 'Confirmed'
        },

    ]


}