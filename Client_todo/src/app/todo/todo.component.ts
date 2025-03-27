import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../todo-list/todo-list.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToDoService } from '../services/to-do.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, DatePipe, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
  id: number = 0 ;
  todo!: ToDoList;
constructor(private route:ActivatedRoute,
  private router: Router,
  private service: ToDoService
){

}
ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.todo = new ToDoList(this.id, "", false, new Date())
  if(this.id != -1 ){
    this.getTodo()
  }
 
}

getTodo(){

 this.service.fetchToDo(sessionStorage.getItem("validUser"), this.id).subscribe(
  data=> {this.todo = data
 
  }

 )
}

saveUpdate(){

  if(this.id == -1){

    this.service.saveToDo(this.id, this.todo).subscribe((data=>
      {
        console.log("data", data)
        this.router.navigate(["/todolist"])
      }
      ))
   
  }
  else{
    
    this.route.snapshot.params['id'];

    this.service.saveUpdate(this.id, this.todo).subscribe((data=>
    {
      console.log("data", data)
      this.router.navigate(["/todolist"])
    }
    ))
    }
  }
  
 

}
