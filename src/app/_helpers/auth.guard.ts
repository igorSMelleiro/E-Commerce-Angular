import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './Authentication.service';
import { map } from 'rxjs/internal/operators/map';

@Injectable({providedIn : 'root'})
export class CanActivateGuard implements CanActivate {
    constructor(private route : Router, private auth : AuthenticationService ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.auth.AuthStatus.pipe(map(x => {
            if(x){
                return x;
            }
            else{
                this.route.navigate(['/']);
                return x;
            }
        }));
    }
}
