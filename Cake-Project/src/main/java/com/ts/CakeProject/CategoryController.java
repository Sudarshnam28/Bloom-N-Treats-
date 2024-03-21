package com.ts.CakeProject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CategoryDAO;
import com.model.Category;
import com.model.Product;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class CategoryController {
	
	
    @Autowired
	CategoryDAO categoryDao;
    
    @PostMapping("registerCategory")
    public void registerCategory(@RequestBody Category category){
    	categoryDao.registerCategory(category);
    }
    
    @GetMapping("getAllCategories")
    public List<Category> getAllCategories(Category category){
    	return categoryDao.getAllCategories(category);
    }
    
    @GetMapping("getCategoryById/{categoryId}")
    public Category getCategoryById(@PathVariable("categoryId") int categoryId){
    	return categoryDao.getCategoryById(categoryId);
    }
    @PutMapping("updateCategory")
	public Category updateCategory(@RequestBody Category category){
	return categoryDao.updateCategory(category);
	}
	
	@DeleteMapping("deleteCategoryById/{categoryId}")
	public void deleteCategoryById(@PathVariable("categoryId")int categoryId){
		categoryDao.deleteCategoryById(categoryId);
	}
}
