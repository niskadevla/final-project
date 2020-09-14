export class AuthService {

  private isAuthenticated = false;

  login(): void {
      this.isAuthenticated = true;
  }

  logout(): void {
      window.localStorage.removeItem('user');
      this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
      return this.isAuthenticated;
  }
}
