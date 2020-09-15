import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    createNewUser(user: IUser): void {
        const users = this.getUsers();

        users.push(user);
        window.localStorage.setItem('users', JSON.stringify(users));
    }

    getUsers(): IUser[] {
        return JSON.parse(window.localStorage.getItem('users')) || [];
    }

    getUserByEmail(email: string): IUser {
        const users = this.getUsers();

        return users.find(user => user.email === email);
    }

}
