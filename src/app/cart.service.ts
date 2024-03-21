// // import { HttpClient } from "@angular/common/http";
// // import { Injectable } from "@angular/core";

// // // Define the CartItem interface
// // export interface CartItem {
// //   productId: number;
// //   productName: string;
// //   productPrice: number;
// //   quantity: number;
// // }

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class CartService {
// //   updateCartItem(item: CartItem): void {
// //     // Find the index of the item in the user's cart
// //     const index = this.userCart.findIndex(cartItem => cartItem.productId === item.productId);
  
// //     // If the item is found, update its quantity
// //     if (index !== -1) {
// //       this.userCart[index].quantity = item.quantity;
// //       this.updateTotalAmount(); // Update the total amount after modifying the quantity
// //       // You may also want to update the cart on the server here
// //     }

// //   }
  
// //   private userCart: CartItem[] = [];
// //   private currentUser: string | null = null; // You can store user information here

// //   constructor(private http: HttpClient) {
// //     // Initialize user cart if user is logged in
// //     this.currentUser = localStorage.getItem('currentUser');
// //     if (this.currentUser) {
// //       this.loadCart();
// //     }
// //   }

// //   private loadCart(): void {
// //     // Fetch user's cart items from the server
// //     // Implement an API endpoint to fetch user's cart based on user ID
// //     // Example: this.http.get<CartItem[]>(`/api/cart/${this.currentUser}`).subscribe(items => {
// //     //   this.userCart = items;
// //     //   this.updateTotalAmount();
// //     // });
// //   }

// //   getCartItems(): CartItem[] {
// //     return this.userCart;
// //   }

// //   addToCart(product: CartItem): void {
// //     // Add item to user's cart
// //     this.userCart.push(product);
// //     this.updateTotalAmount();
// //     // Update cart on the server if necessary
// //   }

// //   removeFromCart(productId: number): void {
// //     // Remove item from user's cart
// //     this.userCart = this.userCart.filter(item => item.productId !== productId);
// //     this.updateTotalAmount();
// //     // Update cart on the server if necessary
// //   }

// //   clearCart(): void {
// //     // Clear user's cart
// //     this.userCart = [];
// //     this.updateTotalAmount();
// //     // Clear cart on the server if necessary
// //   }

// //   updateTotalAmount(): void {
// //     // Calculate total amount based on items in the cart
// //     // This can be implemented as per your business logic
// //     // For example:
// //     // this.totalAmount = this.userCart.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);
// //   }

// //   logout(): void {
// //     // Clear current user and cart
// //     this.currentUser = null;
// //     this.clearCart();
// //     localStorage.removeItem('currentUser'); // Remove user info from local storage
// //   }
// // }
// import { Injectable } from "@angular/core";

// export interface CartItem {
//   productId: number;
//   productName: string;
//   productPrice: number;
//   quantity: number;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   cartItems: CartItem[] = [];

//   addToCart(product: CartItem) {
//     const index = this.cartItems.findIndex(item => item.productId === product.productId);
//     if (index === -1) {
//       this.cartItems.push(product);
//     } else {
//       this.cartItems[index].quantity += product.quantity;
//     }
//     this.saveCartItems();
//   }

//   removeFromCart(productId: number) {
//     this.cartItems = this.cartItems.filter(item => item.productId !== productId);
//     this.saveCartItems();
//   }

//   saveCartItems() {
//     localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
//   }

//   getCartItems() {
//     this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
//     return this.cartItems;
//   }

//   clearCart() {
//     localStorage.removeItem('cartItems');
//     this.cartItems = [];
//   }

//   updateCartItem(item: CartItem) {
//     const index = this.cartItems.findIndex(cartItem => cartItem.productId === item.productId);
//     if (index !== -1) {
//       this.cartItems[index].quantity = item.quantity;
//       this.saveCartItems();
//     }
//   }

//   updateTotalAmount(): number {
//     return this.cartItems.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);
//   }
// }
import { Injectable } from "@angular/core";

export interface CartItem {
  productId: number;
  productName: string;
  productPrice: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];

  addToCart(product: CartItem) {
    const index = this.cartItems.findIndex(item => item.productId === product.productId);
    if (index === -1) {
      this.cartItems.push(product);
    } else {
      this.cartItems[index].quantity += product.quantity;
    }
    this.saveCartItems();
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
    this.saveCartItems();
  }

  saveCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  getCartItems() {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    return this.cartItems;
  }

  clearCart() {
    localStorage.removeItem('cartItems');
    this.cartItems = [];
  }

  updateCartItem(item: CartItem) {
    const index = this.cartItems.findIndex(cartItem => cartItem.productId === item.productId);
    if (index !== -1) {
      this.cartItems[index].quantity = item.quantity;
      this.saveCartItems();
    }
  }

  updateTotalAmount(): number {
    return this.cartItems.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);
  }
}
