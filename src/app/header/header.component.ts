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
  constructor(public service: CustomerService) {this.isUserLoggedIn=false;}

  logout(): void {
    this.service.logout();
  }
  setUserLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }
}
