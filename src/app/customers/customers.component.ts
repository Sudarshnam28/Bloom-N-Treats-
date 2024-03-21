import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  customers$:Observable<any>;
  constructor(private custService:CustomerService){
  this.customers$=this.custService.getAllCustomers().pipe(
    map((item:any)=>{
      return item;
    })
  );
  }
}
