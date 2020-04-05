import {Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProdCardInfo } from '../prod-showcase/prod-card/prod-card-info';
import { ProdShowcaseDiService } from '../prod-showcase/prod-showcase-di.service';


Injectable({
    providedIn:'root'
})

export class ProdPageResolver {
    constructor(private prodData : ProdShowcaseDiService){
        
    }
    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : ProdCardInfo[]{

        
    // }
}