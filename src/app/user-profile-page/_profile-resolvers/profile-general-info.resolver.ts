import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProfileGeneralInfoResolver implements Resolve<Observable<any>> {
    private profileGenRoute = 'http://localhost:3000/user-profile-page/get-general-info';
    constructor(private http : HttpClient){
    }
    resolve(route: ActivatedRouteSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
        return this.http.get(this.profileGenRoute).pipe(map( results => {
            return results[0];
        }));
    }
}