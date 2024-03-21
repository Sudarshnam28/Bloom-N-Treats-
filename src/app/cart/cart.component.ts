import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

interface CartItem {
  productId: number;
  productName: string;
  productPrice: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService,private router:Router) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalAmount();
  }

  addToCart(product: CartItem): void {
    this.cartService.addToCart(product);
    this.loadCart();
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.loadCart();
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

  buyNow(): void {
    this.router.navigate(['/header/order']);
  }
}
