package com.javainuse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.javainuse.model.Employee;
import com.javainuse.service.RabbitMQSender;

@Controller
@RequestMapping(value = "/javainuse-rabbitmq/")
public class RabbitMQWebController {

	@Autowired
	RabbitMQSender rabbitMQSender;

	//@PostMapping(value = "/producer")
	@RequestMapping(value="/producer", method=RequestMethod.POST)
	public String producer(@RequestBody Employee customer) {
		//String empName=;
		//String empId=;
	Employee emp=new Employee();
	emp.setEmpId(customer.getEmpId());
	emp.setEmpName(customer.getEmpName());
		rabbitMQSender.send(emp);

		return "Message sent to the RabbitMQ JavaInUse Successfully";
	}
	
	@RequestMapping(value="/",method = RequestMethod.GET)
    public String homepage(){
        return "index";
    }
	
//	@RequestMapping(value="/postcustomer", method=RequestMethod.POST)
//	public String postCustomer(@RequestBody Employee customer){
//		//cust.add(customer);
//		System.out.println("customer"+customer);
//		
//		return "Sucessful!";
//	}
	

}

