import { IUserToken } from '../models/user-token.model';
import { tokenLifeTime } from '../utils/constants';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isAuthenticated = !this.isTokenExpired(this.getUserToken());

    private getUserToken(): IUserToken {
        return JSON.parse(window.localStorage.getItem('user'));
    }

    login(userToken: IUserToken): void {
        window.localStorage.setItem('user', JSON.stringify(userToken));
        this.isAuthenticated = true;
    }

    logout(): void {
        window.localStorage.removeItem('user');
        this.isAuthenticated = false;
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated;
    }

    isTokenExpired(user: IUserToken): boolean {

        if (!user) {
            return true;
        }

        return user.timeStamp + tokenLifeTime < Date.now();
    }
}
