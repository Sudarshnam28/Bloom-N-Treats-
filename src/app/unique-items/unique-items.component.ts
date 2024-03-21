import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-unique-items',
  templateUrl: './unique-items.component.html',
  styleUrls: ['./unique-items.component.css'] 
})
export class UniqueItemsComponent implements OnInit {
  productList: any[] = [];
  list: any[] = [];

  constructor(private service: ProductsService,private serv:CustomerService) {}

  ngOnInit(): void {
    this.getAllProductsBycategoryId();
  }

  getAllProductsBycategoryId(): void {
    this.service.getProductByCategory(6).subscribe((res: any) => { 
      this.productList = res;
      // // Filter products by category ID
      // this.list = this.productList.filter(product => product.category.id === 4);
    });
  }
  addToCart(product: any) {
    this.service.setUserLoggedIn();
    this.service.addToCart(product);
    alert("product added successfully");
  }
  
}