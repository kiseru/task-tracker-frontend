import { Injectable } from '@angular/core';
import { LoginForm } from '../entities/login-form';
import { HttpClient } from '@angular/common/http';
import { Token } from '../entities/token';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly BASE_URL = 'auth/';
  private readonly AUTH_TOKEN_COOKIE_KEY = 'AuthToken';

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
  ) {
  }

  login(loginForm: LoginForm): Observable<Token> {
    return this.http.post<Token>(this.BASE_URL, loginForm);
  }

  setAuthToken(token: Token): void {
    this.cookieService.set(this.AUTH_TOKEN_COOKIE_KEY, token.key);
  }

  isAuthenticated(): boolean {
    return this.cookieService.check(this.AUTH_TOKEN_COOKIE_KEY);
  }

  getAuthToken(): string {
    return this.cookieService.get(this.AUTH_TOKEN_COOKIE_KEY);
  }

  logout(): void {
    this.cookieService.delete(this.AUTH_TOKEN_COOKIE_KEY);
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}me/`);
  }
}
