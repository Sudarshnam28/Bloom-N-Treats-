package com.ts.CakeProject;



import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.dao.OrdersDao;
import com.model.Orders;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class OrdersController {

	@Autowired
	OrdersDao ordersdao;
	
	@PostMapping("addOrder")
	public void addOrders(@RequestBody Orders orders){
		ordersdao.addOrders(orders);
	}
	@GetMapping("getAllOrders")
	public List<Orders> getAllOrders( Orders orders){
		return ordersdao.getOrders(orders);
	}

	
}
