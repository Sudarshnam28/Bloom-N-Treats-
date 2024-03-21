import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent {
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.logout();
    // Redirect to the login page or display a confirmation message
  }
}