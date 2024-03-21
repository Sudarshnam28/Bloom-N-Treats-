package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Product;
import com.model.Review;
@Service
public class ReviewDAO {
 
	@Autowired
	ReviewRepo revRepo;
	
	
	public List<Review> getAllReviews(Review review) {
		
		return revRepo.findAll();
	}
	public void addReview(Review review) {
		revRepo.save(review);
		
	}

}