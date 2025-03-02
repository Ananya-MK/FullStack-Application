import { CommonModule, DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

export class ToDoList {
constructor(
public id: number,
 public desc : string,
 public status: boolean,
 public date: Date

){
}
}
@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, DatePipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})


export class TodoListComponent implements OnInit{
  
  toDoList = [
    new  ToDoList(1,"To Learn Dancing", true, new Date()),
    new  ToDoList(2,"To Learn Angular", false, new Date()),
    new  ToDoList(3,"To go on Trip", false, new Date()),
 ]
  constructor(
   
  ){

  }


  

  ngOnInit(): void {
    
  }

}
