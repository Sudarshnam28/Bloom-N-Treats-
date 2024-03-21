import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post('https://your-backend-api.com/login', { username, password });
  }

  isLoggedIn(): boolean {
    // You can replace this with a check for a token in the local storage or a cookie
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  isAuthenticated(): boolean {
    // Implement your authentication logic here
    // For example, you can check if a token exists in local storage
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    // You can implement this method to remove the token from the local storage or the cookie
    localStorage.removeItem('isLoggedIn');
  }
}