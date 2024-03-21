package com.ts.CakeProject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CustomerDAO;
import com.model.Customer;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class CustomerController {

	@Autowired
	private CustomerDAO customerDao;
	
	@PostMapping("registerCustomer")
	public void registerCustomer(@RequestBody Customer customer){
		customerDao.registerCustomer(customer);
	}
	
	@RequestMapping("loginCustomer/{userName}/{password}")
	public Customer loginCustomer(@PathVariable("userName")String userName,@PathVariable("password")String password){
		return customerDao.findByUserNamePassword(userName,password);
	}
	
	@RequestMapping("getAllCustomers")
	public List<Customer> getAllCustomers(Customer customer){
		return customerDao.getAllCustomers(customer);
	}
	
	@RequestMapping("getCustomerById/{id}")
	public Customer getCustomerById(@PathVariable("id")int id){
		return customerDao.getCustomerById(id);
	}
	@PutMapping("updateCustomer")
	public Customer updateCustomer(@RequestBody Customer cust){
	return customerDao.updateCustomer(cust);
	}
	
	@DeleteMapping("deleteCustomerById/{id}")
	public void deleteCustById(@PathVariable("id")int id){
		customerDao.deleteCustById(id);
	}

}