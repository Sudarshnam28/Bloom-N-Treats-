import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
   isUserloggedIn :any; 
   loginStatus: Subject<any>;      

  constructor(private http: HttpClient, private router: Router) {
    this.isUserloggedIn=true;
    this.loginStatus = new Subject();
   }

   getLoginStatus(): any {
    return this.loginStatus.asObservable();
  }

  setUserLoggedIn(): any {
    this.isUserloggedIn = true;
    this.loginStatus.next(true);   
  }

  getUserLoggedStatus(): boolean {
    return this.isUserloggedIn;
  }

  setUserLogout(): void {
    this.isUserloggedIn = false;
    this.loginStatus.next(false);
  }

  logout(): void {
    // Clear the user session or token
    localStorage.removeItem('token');
  
    // Set the user login status to false
    this.isUserloggedIn = false;
  
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
