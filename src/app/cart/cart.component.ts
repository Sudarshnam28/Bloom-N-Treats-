import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalAmount: number = 0;
  isLoggedIn: boolean = true;

  constructor(private cartService: CartService, private router: Router, private service: CustomerService) {}

  ngOnInit(): void {
    this.loadCart();
    this.isLoggedIn = this.service.setUserLoggedIn(); 
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalAmount();
  }

  addToCart(product: CartItem): void {
  
      this.cartService.addToCart(product);
      this.loadCart();
      alert("Product added to cart successfully!");
    
  }
  

  increaseQuantity(item: CartItem): void {
    item.quantity++;
    this.cartService.updateCartItem(item);
    this.loadCart();
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 0) {
      item.quantity--;
      this.cartService.updateCartItem(item);
      this.loadCart();
    }
  }

  updateTotalAmount(): void {
    this.totalAmount = this.cartItems.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }

  buyNow(): void {
    this.service.setUserLoggedIn();
    this.router.navigate(['/header/order']);
  }

  logout(): void {
    this.service.setUserLogout();
    this.isLoggedIn = false;
  }
}
