import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
carousal:any;

constructor(private service:ProductsService){
  this.carousal=[{imgsrc:'assets/images/carousal1.jpg'},{imgsrc:'assets/images/carousal2.jpg'},{imgsrc:'assets/images/carousal3.jpg'},{imgsrc:'assets/images/carousal4.jpg'},{imgsrc:'assets/images/carousal5.jpg'}]
}

}
