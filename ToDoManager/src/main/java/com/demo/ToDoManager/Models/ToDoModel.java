package com.demo.ToDoManager.Models;

import java.util.Date;

public class ToDoModel {

	private int todoId;
	private String desc;
	private Date targetDate;
	private boolean completed;
	public int getTodoId() {
		return todoId;
	}
	public void setTodoId(int todoId) {
		this.todoId = todoId;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	public boolean isCompleted() {
		return completed;
	}
	public void setCompleted(boolean completed) {
		this.completed = completed;
	}
	@Override
	public String toString() {
		return "ToDoModel [todoId=" + todoId + ", desc=" + desc + ", targetDate=" + targetDate + ", completed="
				+ completed + "]";
	}
	public ToDoModel(int todoId, String desc, Date targetDate, boolean completed) {
		super();
		this.todoId = todoId;
		this.desc = desc;
		this.targetDate = targetDate;
		this.completed = completed;
	}
	
	public ToDoModel() {
		
	}
	
}
