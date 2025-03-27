package com.demo.ToDoManager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.demo.ToDoManager.Models.ToDoModel;
import com.demo.ToDoManager.services.ToDoSevice;

@CrossOrigin("http://localhost:4200")
@RestController
public class ToDoController {

	@Autowired
	ToDoSevice todoservice;
	
	@RequestMapping(method= {RequestMethod.GET}, path="/getToDo/uesrname/{user}")
	public List<ToDoModel> getAllTodo(@PathVariable String user){
		return todoservice.findAll();
	}
	
	@RequestMapping(method= {RequestMethod.GET}, path="/getToDo/uesrname/{user}/{id}")
	public ToDoModel getTodoById(@PathVariable String user, @PathVariable int id){
		return todoservice.fetchById(id);
	}
	
	@RequestMapping(method= {RequestMethod.DELETE}, path="/delete/Todo/uesrname/{user}/TodoId/{id}")
	public ResponseEntity<Void> deleteToDo( @PathVariable int id, @PathVariable String user){
		ToDoModel ToDo = todoservice.deleteToDo(id);
		if(ToDo!=null) {
			return ResponseEntity.noContent().build();
			}
		return ResponseEntity.notFound().build();
	}
	@RequestMapping(method= {RequestMethod.PUT}, path="/update/Todo/uesrname")
	public ResponseEntity<ToDoModel> update(  @RequestBody ToDoModel toDoModel){
		ToDoModel updatedtoDoModel = todoservice.save(toDoModel);
	
			return new ResponseEntity<ToDoModel>(updatedtoDoModel, HttpStatus.OK);
	}
	
	@RequestMapping(method= {RequestMethod.POST}, path="/add/Todo/uesrname")
	public ResponseEntity<ToDoModel> save(@RequestBody ToDoModel toDoModel){
		todoservice.save(toDoModel);
	
			return new ResponseEntity<ToDoModel>(toDoModel, HttpStatus.OK);
		
	}
	
}
