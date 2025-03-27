package com.demo.ToDoManager.entities;


import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="todo_master")
public class TodoManager {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="todo_id")
	private int todoId;
	
	@Column(name="description")
	private String desc;
	
	@Column(name="targetDate", columnDefinition ="date")
	private Date targetDate;
	
	@Column(name="is_completed")
	private boolean completed;
}
