package com.ts.CakeProject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.ReviewDAO;
import com.dao.ReviewRepo;
import com.model.Product;
import com.model.Review;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ReviewController {

	@Autowired 
	ReviewDAO revDAO;
	@PostMapping("addReviews")
	public void addreviews(@RequestBody Review review){
		revDAO.addReview(review);
	}
	@GetMapping("getAllReviews")
	public List<Review> getAllReviews( Review review){
		return revDAO.getAllReviews(review);
	}
}
