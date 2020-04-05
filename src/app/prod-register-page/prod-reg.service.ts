import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IProductFullData } from './Product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProdRegService {
  
  constructor(private http: HttpClient) { }


  prodRegUrl = "http://localhost:3000/prodregistration";
  
  prodRegExistingAddressUrl = "http://localhost:3000/prodregistration/existing-addr";
  userAddress = "http://localhost:3000/profile/user-address";
  /**
   * @param regData Receives IProductRegistration 
   */
  onRegisterProduct(regData : IProductFullData ){
    return this.http.post<IProductFullData>(this.prodRegUrl,regData);
  }
  oRegProductWithExistingAddress(regData : IProductFullData){
    return this.http.post<IProductFullData>(this.prodRegExistingAddressUrl,regData);
  }

  getUserAddress(){
    return this.http.get(this.userAddress);
  }
}


