
import { AuthenticationService } from './Authentication.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor (private auth : AuthenticationService){}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.auth.currentUserValue;
    
        

       if (currentUser && currentUser.user_token) {
        request = request.clone({
                setHeaders: {
                    Authorization: `${currentUser.user_token}`
                }
            });
        }
        console.log(request);
        return next.handle(request);
    }
}