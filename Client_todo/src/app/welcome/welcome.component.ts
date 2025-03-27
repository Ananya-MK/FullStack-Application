import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { WelcomeServiceService } from '../services/welcome-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  user: string ='';
  customizedMessage:string ='';
  errorMessage:string = '';
  constructor(private route:ActivatedRoute,
    private welcomeServiceService: WelcomeServiceService
  ){

  }

  ngOnInit(): void {
    this.user = this.route.snapshot.params['name'];
  }

  customMessage(){
    this.welcomeServiceService.getMessage().subscribe(response=>
      // console.log(response.message)
      this.customizedMessage = response.message,
    error => this.errorMessage = error.message
    );
  }

  getMessageWithPathVariable(){
    this.welcomeServiceService.getMessageWithPathVariable(this.user).subscribe(response=>
      // console.log(response.message)
      this.customizedMessage = response.message,
    error => this.errorMessage = error.message
    );
  }

}
