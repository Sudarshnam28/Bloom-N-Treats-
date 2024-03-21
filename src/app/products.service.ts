import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from './Constant';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  setUserLoggedIn() {
    throw new Error('Method not implemented.');
  }
  cartProducts:any

  constructor(private http:HttpClient) { 
    this.cartProducts=[];
  }

  
  getProducts() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCTS)
      .pipe(
        tap((products: any) => console.log('Products:', products))
      );
  }
getCategory(){
  return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_ALL_CATEGORIES);
}
saveProduct(obj:any){
  return this.http.post(Constant.API_END_POINT+Constant.METHODS.REGISTER_PRODUCT,obj);
}
updateProduct(obj:any){
  return this.http.post(Constant.API_END_POINT+Constant.METHODS.UPDATE_PRODUCT,obj);
}
deleteProduct(productId: any) {
  return this.http.delete(Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT + '/' + productId);
}

getProductByCategory(categoryId:any){
  return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_PRODUCT_BY_CATEGORY_ID+'/'+categoryId);
}
addToCart(product: any) {
  let cartItems: any[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
  cartItems.push(product);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
}