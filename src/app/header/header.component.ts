import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isUserLoggedIn:boolean;
  loginStatus: any; 
  constructor(public service: CustomerService) {this.isUserLoggedIn=false;}
  ngOnInit(){
    this.service.getLoginStatus().subscribe((loginStatusData: any) => {
      this.loginStatus = loginStatusData;
    });
  }
  logout(): void {
    this.service.logout();
  }
  setUserLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }
}
