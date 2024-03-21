import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
cards:any;
productList:any[]=[];
constructor(private service:ProductsService){
  this.cards=[{imgsrc:'assets/images/card1.jpg'},{imgsrc:'assets/images/card1.jpg'},{imgsrc:'assets/images/card1.jpg'}]
}
ngOnInit(): void {
  this.getAllProducts();
}
getAllProducts(){
  this.service.getProducts().subscribe((res:any)=>{
 this.productList=res;
  })
}
}
