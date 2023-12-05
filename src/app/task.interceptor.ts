import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable()
export class TaskInterceptor implements HttpInterceptor {
  private token = 'hiiiii';
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request started:', request);
    const req1 = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Auth-headers': this.token 
      }
    });
    return next.handle(req1)
      .pipe(
        tap(
          (event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              console.log('Request completed successfully:', event);
            }
          },
          (error: HttpErrorResponse) => {
            console.error('Interceptor Error:', error);
            return throwError('Something went wrong; please try again later.');
          }
        )
      );
  }
}
