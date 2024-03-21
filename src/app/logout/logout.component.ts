import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {
  constructor(private customerService: CustomerService,private router:Router) { 
    this.customerService.setUserLogout();           
  this.router.navigate(['login']); }

  ngOnInit() {
    this.customerService.logout();
    
  }
}