import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  private loggedIn = false; 

  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setUserLoggedIn(): any {
    this.loggedIn = true;
    console.log("user logged in");
  }

  getUserLoggedStatus(): boolean {
    return this.loggedIn;
  }

  setUserLogout(): void {
    this.loggedIn = false;
  }

  logout(): void {
    // Clear the user session or token
    localStorage.removeItem('token');
  
    // Set the user login status to false
    this.loggedIn = false;
  
    // Redirect to the login page
    this.router.navigate(['/header/login']);
  }

  register(data: any) {
    return this.http.post("http://localhost:8085/registerCustomer", data);
  }

  getAllCustomers() {
    return this.http.get("http://localhost:8085/getAllCustomers");
  }
}
