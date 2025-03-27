import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class WelcomeServiceService {

  constructor(private http: HttpClient) { }

  getMessage():Observable<any>{
    return this.http.get('http://localhost:8080/basicAuth');
  }

// this is specified in Interceptor so that need not add in every request
      // createHeader(){
      //   let user = 'ananya'
      //   let password = 'password'
      //   let basicAuthrntication = 'Basic '+ window.btoa(user +':'+ password)
      //   return basicAuthrntication;
      // }
    

  getMessageWithPathVariable(name:any):Observable<any>{
    console.log(name);
    // let basicAuthHeader = this. createHeader();
    // let header = new HttpHeaders({
    //   Authorization: basicAuthHeader
    // })
    
    // return this.http.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`,{headers: header} );
    return this.http.get(`${API_URL}/hello-world-bean/path-variable/${name}` );
  }
}
