package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Orders;

@Service
public class OrdersDao {

	@Autowired
	OrdersRepo ordersrepo;

	public void addOrders(Orders order) {
		ordersrepo.save(order);
	}


	public List<Orders> getOrders(Orders orders) {
		
		return ordersrepo.findAll();
	}
}

