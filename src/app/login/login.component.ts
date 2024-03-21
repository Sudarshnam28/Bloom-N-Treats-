import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  customers: any = {};
  user_name:any;
  password:any;
  cust:any;
constructor(private router:Router,private service:CustomerService){
this.user_name='admin@gmail.com';
this.password='admin@123';
}
ngOnInit(): void {
  this.service.getAllCustomers().subscribe((item:any)=>{
    this.cust=item;
  })
}
  loginValidate(loginForm:any):any {
    console.log(loginForm);
    if(loginForm.userName=='admin@gmail.com' && loginForm.password=='admin@123'){
      alert("admin login successful");
      this.service.setUserLoggedIn();
      this.router.navigate(['header-admin']);
    }  if (!this.cust) {
      console.error("Customer data not available");
      return; // Exit the function if customer data is not available
    }
  
    // Find if there is a matching user in the customer data
    const matchedUser = this.cust.find((user: any) => {
      return user.userName === loginForm.userName && user.password === loginForm.password;
    });
  
    if (matchedUser) {
      alert("User login successful");
      this.service.setUserLoggedIn();
      this.router.navigate(['header']);
    } 
  }
  signUp(){
    this.router.navigate(['/header/register']);
  }
}
