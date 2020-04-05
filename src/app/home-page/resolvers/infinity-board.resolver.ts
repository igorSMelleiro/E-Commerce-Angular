import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class InfinityBoardResolver implements Resolve<Observable<any>> {

    constructor(private http : HttpClient) {}
    infinityResUrl : string = 'http://localhost:3000/home-page/infinity-board';
    resolve(route: ActivatedRouteSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
        return this.http.get(this.infinityResUrl);
    }
}