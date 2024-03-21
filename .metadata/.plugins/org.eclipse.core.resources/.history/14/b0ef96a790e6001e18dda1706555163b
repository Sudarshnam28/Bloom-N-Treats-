package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.model.Customer;
@Repository
public interface CustomerRepo extends JpaRepository<Customer,Integer> {

	
	 @Query("SELECT c FROM Customer c WHERE c.userName = :userName AND c.password = :password")
	Customer findByUserNamePassword(String userName, String password);

	 
}
