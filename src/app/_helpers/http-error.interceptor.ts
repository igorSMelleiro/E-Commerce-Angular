import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { AuthenticationService } from './Authentication.service';

@Injectable({providedIn: 'root'})
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private auth : AuthenticationService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error : HttpErrorResponse) => {
                return throwError(error) ;
        }));
    }
} 