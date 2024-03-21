package com.dao;

import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Customer;
import com.model.Product;

@Service
public class ProductDAO {

	@Autowired
	ProductRepo prodRepo;
	
	public void registerProduct(Product product) {
		prodRepo.save(product);	
	}

	public List<Product> getAllProducts(Product product) {
		// TODO Auto-generated method stub
		return prodRepo.findAll();
	}

	public Product getProductById(int productId) {
		// TODO Auto-generated method stub
		return prodRepo.findById(productId).orElse(new Product());
	}

	public Product updateProduct(Product prod) {
		// TODO Auto-generated method stub
		return prodRepo.save(prod);
	}

	public void deleteProductById(int productId) {
		prodRepo.deleteById(productId);
		
	}
	 public List<Product> getAllProductsByCategoryId(int categoryId) {
	        return prodRepo.findAllByCategoryId(categoryId);
	    }
     
	
      
}
