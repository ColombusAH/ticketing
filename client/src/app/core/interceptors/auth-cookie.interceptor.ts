import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class cookieInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    return next.handle(request).pipe(
      tap((e) => {
        if (e instanceof HttpResponse) {
          console.log('response intercepted');
          console.log(e);
        }
      })
    );
  }
}

export const cookieInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: cookieInterceptor,
  multi: true,
};
