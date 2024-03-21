import { Injectable } from '@angular/core';

interface CartItem {
  productId: number;
  productName: string;
  productPrice: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

  constructor() {
    this.loadCartItems();
  }

  addToCart(product: CartItem): void {
    const index = this.cartItems.findIndex(item => item.productId === product.productId);
    if (index === -1) {
      this.cartItems.push({ ...product, quantity: 1 });
    } else {
      this.cartItems[index].quantity++;
    }
    this.saveCartItems();
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    this.saveCartItems();
  }

  updateCartItem(item: CartItem): void {
    const index = this.cartItems.findIndex(cartItem => cartItem.productId === item.productId);
    if (index !== -1) {
      this.cartItems[index] = item;
      this.saveCartItems();
    }
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
    this.saveCartItems();
  }

  private saveCartItems(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  private loadCartItems(): void {
    const savedItems = localStorage.getItem('cartItems');
    if (savedItems) {
      this.cartItems = JSON.parse(savedItems);
    }
  }
}
