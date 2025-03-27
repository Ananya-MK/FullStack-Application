import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { API_URL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticatorService {

  constructor(private http: HttpClient) { }


//   JWTAuth(user:any, password:any):Observable<any>{
// console.log("JWTAuth called", "yes");
// console.log("user", user);
// console.log("password", password);
// console.log("🚀 Calling API:", `${API_URL}/authenticate`);
//     return this.http.post<any>(`http://localhost:8080/authenticate`,{
//       username: user, // sending paraeters for post request
//       password: password} ).pipe(
//       map(
//         data => {
//           sessionStorage.setItem("authenticatedUser", user);
//           sessionStorage.setItem("token", `Bearer ${data.token}` );
//           return data;
//         }
        
//       )
//     );
//   }

  JWTAuth(user: any, password: any): Observable<any> {
    console.log("🚀 Calling API:", `${API_URL}/authenticate`); // ✅ Debug log
  
    return this.http.post<any>(`${API_URL}/authenticate`, { username: user, password: password }).pipe(
      map(data => {
        console.log("✅ API Response Received:", data);
        return data;
      }),
      catchError(error => {
        console.error("❌ API Request Failed:", error);
        return throwError(() => error);
      })
    );
  }


       createHeader(user:any, password:any){
         
          let basicAuthrntication = 'Basic '+ window.btoa(user +':'+ password)
          return basicAuthrntication;
        }
      
  
    basicAuth(user:any, password:any):Observable<any>{

      let basicAuthHeader = this. createHeader(user,password);
      let header = new HttpHeaders({
        Authorization: basicAuthHeader
      })
      
      return this.http.get(`http://localhost:8080/basicAuth`,{headers: header} ).pipe(
        map(
          data => {
            sessionStorage.setItem("authenticatedUser", user)
            sessionStorage.setItem("token", basicAuthHeader)
            return data;
          }
          
        )
      );
    }

  getAuthenticatedUser(){
        return sessionStorage.getItem("authenticatedUser")
    }

    getToken(){
      if(this.getAuthenticatedUser())
        return sessionStorage.getItem("token")
     return null;
    }

    isUserLoggedIn(){
      let user = this.getToken()
      return !(user == null)
    }

    logOut(){
      sessionStorage.removeItem("token")
      sessionStorage.removeItem("authenticatedUser")
    }
}
