import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticatorService {

  constructor() { }

  isLoggedIn(user:any, password: any){
    if(user === 'in28minutes' && password == 'dummy'){
      sessionStorage.setItem("validUser", user);
        return true;
    }
    return false;
  }

  isValidUser(){
    let valid = sessionStorage.getItem("validUser")
    if (valid==null)
      return false;
    return true;
  }
}
