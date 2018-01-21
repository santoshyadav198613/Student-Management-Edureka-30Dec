import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class ApiinterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    if(req.method === 'POST'){

      let newRequest = req.clone({ headers: new HttpHeaders().set('apiKey', 'ghj3423dsfsdf') })
      console.log(newRequest);
      return next.handle(newRequest);
    }

    return next.handle(req);
  }

}
