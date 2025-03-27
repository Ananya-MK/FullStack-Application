import { HttpHandler, HttpHandlerFn, HttpHeaders, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//This method is used in previous versions before 15 of angular specifying in appModule as providers
//This is replace by functional interceptor 
export class HttpAuthServiceService implements HttpInterceptor{
 intercept(request: HttpRequest<any>, next: HttpHandler){
  let user = 'ananya'
  let password = 'password'
  let basicAuthrntication = 'Basic '+ window.btoa(user +':'+ password)
     
  request = request.clone({
  setHeaders :{
  Authorization: basicAuthrntication
}
  })
  return next.handle(request)
 }

  constructor() { }

  
}
