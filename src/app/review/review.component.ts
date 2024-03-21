import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';

interface Review {
  id: number;
  feedBack: string; // Aligning with the template
 
  // Add any other properties as needed
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews: Review[] = []; // Using the Review interface
  newReview: Review = { id: 0, feedBack: "" }; // Using the Review interface

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.reviewService.getReviews().subscribe((reviews: any) => {
      this.reviews = reviews;
    });
  }

  addReview(): void {
    this.reviewService.addReview(this.newReview).subscribe(() => {
      this.loadReviews();
      this.newReview = { id: 0, feedBack: "" }; // Resetting newReview
    });
  }

  onSubmit() {
    if (this.reviews === null) {
      alert('Review failed');
    } else {
      alert('Review submitted successfully');
    }
  }
}
