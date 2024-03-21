import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-best-of-cakess',
  templateUrl: './best-of-cakes.component.html',
  styleUrls: ['./best-of-cakes.component.css'] 
})
export class BestOfCakesComponent implements OnInit {
  productList: any[] = [];
  list: any[] = [];

  constructor(private service: ProductsService, private serv: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.getAllProductsBycategoryId();
  }

  getAllProductsBycategoryId(): void {
    this.service.getProductByCategory(5).subscribe((res: any) => { 
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