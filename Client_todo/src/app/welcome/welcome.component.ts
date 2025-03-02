import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-welcome',
  imports: [RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  user: string ='';
  constructor(private route:ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.user = this.route.snapshot.params['name'];
  }

}
