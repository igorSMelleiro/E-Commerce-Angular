import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/_helpers/Authentication.service';
import { ProfileActionsService } from '../user-profile-page-user.service';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class PSelledResolver implements Resolve<Observable<any>> {

    private getSelledProducts = 'http://localhost:3000/user-profile-page/selled';

    constructor(
        private http : HttpClient,
        private auth : AuthenticationService,
        private profileService : ProfileActionsService){}

    resolve(route: ActivatedRouteSnapshot): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
        return this.http.get(this.getSelledProducts);
    }
}