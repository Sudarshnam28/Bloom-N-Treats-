import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-best-of-flowers',
  templateUrl: './best-of-flowers.component.html',
  styleUrls: ['./best-of-flowers.component.css'] 
})
export class BestOfFlowersComponent implements OnInit {
  productList: any[] = [];
  list: any[] = [];

  constructor(private service: ProductsService, private serv: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.getAllProductsBycategoryId();
  }

  getAllProductsBycategoryId(): void {
    this.service.getProductByCategory(2).subscribe((res: any) => { 
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