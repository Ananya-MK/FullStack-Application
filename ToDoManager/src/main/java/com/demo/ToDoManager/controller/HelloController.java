package com.demo.ToDoManager.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.demo.ToDoManager.Models.HelloBean;

@CrossOrigin("http://localhost:4200")
@RestController
public class HelloController {

	
	@RequestMapping(method=RequestMethod.GET, path ="/hello-world")
	public String hello() {
		return "Hello World";
	}
	
	@RequestMapping(method=RequestMethod.GET, path ="/hello-world-bean/path-variable/{name}")
	public HelloBean helloBean(@PathVariable String name) {
//	@RequestMapping(method=RequestMethod.GET, path ="/hello-world-bean")
//	public HelloBean helloBean() {
//		throw new RuntimeException("Invalid") ;
		System.out.println(name);
		return new HelloBean ("Hello World " + name +"!!!");
	}
}
