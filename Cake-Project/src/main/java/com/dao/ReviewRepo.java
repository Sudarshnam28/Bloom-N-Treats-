package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.model.Review;
@Repository
public interface ReviewRepo extends JpaRepository<Review,Integer>{

}