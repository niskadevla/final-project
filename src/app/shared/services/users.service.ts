import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {

    createNewUser(user: User): void {
        const users = this.getUsers();

        users.push(user);
        window.localStorage.setItem('users', JSON.stringify(users));
    }

    getUsers(): any[] {
        return JSON.parse(window.localStorage.getItem('users')) || [];
    }

    getUserByEmail(email: string): User {
        const users = this.getUsers();

        return users.find(user => user.email === email);
    }

}
