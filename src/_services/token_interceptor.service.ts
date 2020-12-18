import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class Token_interceptorService implements HttpInterceptor {

constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem("token");
    if(token)
    {
      let newRequest = req.clone({
        setHeaders : {
          Authorization: 'Bearer ' + token
        }
      })
      return next.handle(newRequest);
    }
  }
  }


