import { IUserToken } from '../models/user-token.model';
import { lifeTime } from '../utils/constants';

export class AuthService {

  private isAuthenticated = !this.isTokenExpired();

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

  isTokenExpired(): boolean {
      const user: IUserToken = JSON.parse(window.localStorage.getItem('user'));

      if (!user) {
          return true;
      }

      return user.timeStamp + lifeTime < Date.now();
  }
}
