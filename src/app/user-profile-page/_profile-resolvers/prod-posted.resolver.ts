import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostedProductsResolver implements Resolve<Observable<any>> {
    private postedProdRoutes = 'http://localhost:3000/user-profile-page/get-posted-product';
    constructor(private http : HttpClient){
    }
    resolve(route: ActivatedRouteSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
        return this.http.get(this.postedProdRoutes).pipe(map(results => {
            console.log(results);
            return results;
        }));
    }
}