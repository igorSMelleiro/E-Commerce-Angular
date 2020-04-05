import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/_helpers/Authentication.service';
import { ProfileData } from '../_interfaces/profile-data';
import { map } from 'rxjs/operators';


@Injectable()
export class ProfileInfoResolver implements Resolve<Observable<any[]>>{


    profile_info : string = 'http://localhost:3000/profile/user-profile-data';

    constructor(private http : HttpClient, private auth : AuthenticationService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
        return this.http.get<ProfileData>(this.profile_info).pipe(map(data => {
            
            let profileData : ProfileData = {
                user_image : this.auth.currentUserValue.user_image,
                user_name : data.user_name,
                user_email :  data.user_email,
                //user Details Data
                user_detail_id :  data.user_detail_id,
                user_detail_firstphone :  data.user_detail_firstphone, 
                user_detail_secondphone :  data.user_detail_secondphone,
                user_detail_birthday :  data.user_detail_birthday,
                user_detail_cpf :  data.user_detail_cpf,
                //card
                user_card_id :  data.user_card_id,
                user_card_number :  data.user_card_number,
                user_card_owner_name :  data.user_card_owner_name,
                user_expiration_data :  data.user_expiration_data,    
                //store 
                user_store_id :  data.user_store_id,
                user_store_name :   data.user_store_name,
                user_store_cnpj :   data.user_store_cnpj,
                user_store_phone :  data.user_store_phone, 
                user_store_cellphone :   data.user_name
            }
            return profileData;
        }));
    }


}