import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve , RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { CompleteProdRequestService } from '../complete-prod-request.service';

@Injectable({
    providedIn: 'root'
})
export class ProdPageResolver implements Resolve<Observable<any>>{
    constructor(private prodReq : CompleteProdRequestService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
        let prodId = parseInt(route.paramMap.get('id'));
        let usrId =  parseInt(route.paramMap.get('id2'));

        return  this.prodReq.getCompleteProData(prodId,usrId);
    }
 
}