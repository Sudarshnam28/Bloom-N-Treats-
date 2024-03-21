import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chocolates',
  templateUrl: './chocolates.component.html',
  styleUrls: ['./chocolates.component.css'] 
})
export class ChocolatesComponent implements OnInit {
  productList: any[] = [];
  list: any[] = [];

  constructor(private service: ProductsService, private serv: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.getAllProductsBycategoryId();
  }

  getAllProductsBycategoryId(): void {
    this.service.getProductByCategory(4).subscribe((res: any) => { 
      this.productList = res;
    });
  }

  addToCart(product: any) {
    if (this.serv.getUserLoggedStatus()) {
      this.service.addToCart(product);
      alert("Product added successfully");
    } else {
      alert("Please login to add products");
      this.router.navigate(['/login']); 
    }
  } 
  
}