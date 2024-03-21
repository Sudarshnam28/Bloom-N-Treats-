package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Category;
@Service
public class CategoryDAO {
	@Autowired
	CategoryRepo categoryRepo;

	public void registerCategory(Category category) {
		categoryRepo.save(category);	
	}

	public List<Category> getAllCategories(Category category) {
		// TODO Auto-generated method stub
		return categoryRepo.findAll();
	}

	public Category getCategoryById(int categoryId) {
		// TODO Auto-generated method stub
		return categoryRepo.findById(categoryId).orElse(new Category());
	}

	public Category updateCategory(Category category) {
		return categoryRepo.save(category);
	}

	public void deleteCategoryById(int categoryId) {
		// TODO Auto-generated method stub
		categoryRepo.deleteById(categoryId);
	}

}
