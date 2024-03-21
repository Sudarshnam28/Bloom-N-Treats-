import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Constant } from './Constant';
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  //private apiUrl = 'http://localhost:8085/reviews'; // Your backend API URL

  constructor(private http: HttpClient) { }

  addReview(review: any){
    return this.http.post(Constant.API_END_POINT+Constant.METHODS.ADD_REVIEWS,review);
  }
  getReviews() {
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_ALL_REVIEWS);
  }

 
}