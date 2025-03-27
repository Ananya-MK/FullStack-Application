import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { BasicAuthenticatorService } from '../services/Basic-authenticator.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (request: HttpRequest<any>, next: HttpHandlerFn) => {
  // const user = 'ananya';
  // const password = 'password';
  const authService = inject(BasicAuthenticatorService); // Inject AuthService
  const token = authService.getToken();
  const user = authService.getAuthenticatedUser();
  // const password = authService.getPassword();
  // const basicAuthentication = 'Basic ' + window.btoa(user + ':' + password);
let clonedRequest=request;
  if(token && user){
     clonedRequest = request.clone({
      setHeaders: {
        Authorization: token  || '' 
        //  Authorization: `Bearer ${basicAuthentication}` //Bearer tokens are usually JWT tokens issued by an authentication server.
      }
    });
  
   
  }
  return next(clonedRequest);
};


