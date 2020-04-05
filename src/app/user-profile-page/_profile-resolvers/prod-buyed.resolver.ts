import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot , RouterStateSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from 'src/app/_helpers/Authentication.service';
import { ProfileActionsService } from '../user-profile-page-user.service';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
    providedIn : 'root'
})
export class PBuyedResolver  implements Resolve<Observable<any>>{
    
    constructor(private auth : AuthenticationService, private profileService : ProfileActionsService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
        return this.profileService.showBuyedProduct();
    }
    
}