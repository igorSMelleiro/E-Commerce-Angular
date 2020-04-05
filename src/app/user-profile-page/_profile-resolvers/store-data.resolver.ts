import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { AuthenticationService } from 'src/app/_helpers/Authentication.service';

@Injectable({ providedIn: 'root' })
export class StoreInfoResolver implements Resolve<Observable<any>> {
    
    private storeUrl : string = 'http://localhost:3000/user-profile-page/get-store-data'

    constructor(private http : HttpClient, private auth : AuthenticationService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
        return this.http.get(this.storeUrl);
    }
}