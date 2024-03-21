import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent  {
constructor(private router:Router){
  
}
  onSubmit(){
   this.router.navigate(['/header/review']);
  }
  

}

