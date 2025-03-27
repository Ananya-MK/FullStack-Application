import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { BasicAuthenticatorService } from '../services/Basic-authenticator.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  username:string = 'ananya';
  password: string='';
  isInValid: boolean = false;

  constructor(private router:Router,
    private basicAuthenticatorService: BasicAuthenticatorService
  ){

  }
  ngOnInit(): void {
    
  }
  handleLogin(){
//Hardcoded Authentication
    // console.log(this.username);
    // if(this.username == 'in28minutes' && this.password =='dummy'){
    //   this.isInValid = false;
    //   sessionStorage.setItem("validUser", this.username)
    //   this.router.navigate(['welcome/'+ this.username]);
    //   console.log('this.isInValid----',this.isInValid);
      
    // }else{
    //   this.isInValid = true;
    //   console.log('this.isInValid',this.isInValid);
    // }



    //Basic authentication
  //   this.basicAuthenticatorService.basicAuth(this.username, this.password).subscribe((data)=>
  //   {
  //      console.log("data", data);
  //      this.isInValid = false;
  //      sessionStorage.setItem("validUser",  this.username)
  //      this.router.navigate(['welcome/'+ this.username]);
  //   },
  //   (error)=>{
  //     this.isInValid = true;
  //   }
  
  // );

  //JWT authentication
  this.basicAuthenticatorService.JWTAuth(this.username, this.password).subscribe((data)=>
    {
       console.log("data", data);
       this.isInValid = false;
       sessionStorage.setItem("validUser",  this.username)
       this.router.navigate(['welcome/'+ this.username]);
    },
    (error)=>{
      this.isInValid = true;
    }
  
  );
  }
}
