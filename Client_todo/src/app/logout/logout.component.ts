import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{

  ngOnInit(): void {
    sessionStorage.removeItem("validUser");
  }

}
