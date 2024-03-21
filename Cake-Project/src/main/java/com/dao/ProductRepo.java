package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.Product;
@Repository
public interface ProductRepo extends JpaRepository<Product,Integer> {

	
	@Query("SELECT p FROM Product p WHERE p.category.id = :categoryId")
	List<Product> findAllByCategoryId(@Param("categoryId")int categoryId);
	
	


}