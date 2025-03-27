package com.demo.ToDoManager.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.demo.ToDoManager.Models.ToDoModel;

@Service
public class ToDoSevice {

	static List<ToDoModel> toDoModelList = new ArrayList();
	static int counterId=0;
	
	static {
		toDoModelList.add(new ToDoModel(++counterId, "To learn dance", new Date(), false));
		toDoModelList.add(new ToDoModel(++counterId, "To learn angular", new Date(), false));
		toDoModelList.add(new ToDoModel(++counterId, "To learn Java", new Date(), false));
	}
	
	public List<ToDoModel> findAll(){
		return toDoModelList;
	}
	
	public ToDoModel deleteToDo(int id){
		ToDoModel toDoModelDeleteTodo = getById(id);
		if(toDoModelDeleteTodo == null) {
			return null;
		}else {
			toDoModelList.remove(toDoModelDeleteTodo);
			return toDoModelDeleteTodo;
		}
		
		
	}
	
	public ToDoModel fetchById(int id) {
		ToDoModel toDoModel = getById( id);
		return toDoModel;
	}
	
	public ToDoModel getById(int id){
		for(ToDoModel toDo: toDoModelList) {
			if(toDo.getTodoId() == id) {
				return toDo;
				
			}
		}
		return null;	
		}
	
	public ToDoModel save(ToDoModel toDoModel) {
		if(toDoModel.getTodoId() ==-1 || toDoModel.getTodoId() ==0) {
			toDoModel.setTodoId(++counterId);
			toDoModelList.add(toDoModel);
		}else {
			deleteToDo(toDoModel.getTodoId());
			toDoModelList.add(toDoModel);
		}
		return toDoModel;
	}
	
//	public ToDoModel update(int id, ToDoModel toDoModel) {
//		
//		deleteToDo(id);
//		
//		toDoModel.setTodoId(id);
//		
//		toDoModelList.add(toDoModel);
//		return toDoModel;
//	}
	
}
