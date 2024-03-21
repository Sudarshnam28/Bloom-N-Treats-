package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Customer;
import com.model.Orders;

@Service
public class CustomerDAO {

	@Autowired
	private CustomerRepo customerRepo;
	

	public void registerCustomer(Customer customer) {
		customerRepo.save(customer);
		
	}

	public Customer findByUserNamePassword(String userName, String password) {
		return customerRepo.findByUserNamePassword(userName,password);
		
	}

	public List<Customer> getAllCustomers(Customer customer) {
		// TODO Auto-generated method stub
		return customerRepo.findAll();
		
	}

	public Customer getCustomerById(int id) {
		return customerRepo.findById(id).orElse(new Customer());
		}
	public Customer updateCustomer(Customer cust) {
		return customerRepo.save(cust);		
	}
	public void deleteCustById(int id) {
		customerRepo.deleteById(id);
		
	}
	
	
}
