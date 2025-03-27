import { CommonModule, DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ToDoService } from '../services/to-do.service';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';

export class ToDoList {
constructor(
public todoId: number,
 public desc : string,
 public completed: boolean,
 public targetDate: Date

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
  
//   toDoList = [
//     new  ToDoList(1,"To Learn Dancing", true, new Date()),
//     new  ToDoList(2,"To Learn Angular", false, new Date()),
//     new  ToDoList(3,"To go on Trip", false, new Date()),
//  ]
toDoList : ToDoList[] = [];
message: string='';
  constructor(
   private service: ToDoService,
   private route: Router
  ){

  }


  

  ngOnInit(): void {
    this. getAllToDos();
  }

  getAllToDos(){
      this.service.getAllToDos(sessionStorage.getItem("validUser")).subscribe(respose=>
        this.toDoList = respose,
)
  }

  deleteToDos(id: any){
    this.service.deleteToDos(sessionStorage.getItem("validUser"), id).subscribe(respose=>
      {this.message = "Deleted successfully!!!"
      this.getAllToDos();
      }
)
  }

  fetchToDos(id: any){
        this.route.navigate(["/todo/"+id]);
  }

  addToDos(){
    this.route.navigate(["/todo/",-1]);
  }

}
