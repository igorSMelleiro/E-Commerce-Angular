import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


import { map, catchError } from 'rxjs/operators';
import { ShopManagerService } from '../shop-manager/shop-manager.service';

@Injectable({providedIn: 'root'})
export class ShopFinalizationService {
  //private prodRegExistingAddressUrl = "http://localhost:3000/prodregistration/existing-addr";
  private userAddress = "http://localhost:3000/profile/user-address";
  private getCart = "http://localhost:3000/shop/get-cart";
  private prodRegExistingAddressUrl = "http://localhost:3000/shop/single-prod-finalization-existing-address";
  private prodRegNewAddress = 'http://localhost:3000/shop/single-prod-finalization-no-address';
  constructor(private http: HttpClient) { }
  
  /**
   * 
   * @param prodId id's do produto
   * @param amount quantidade comprada
   * @param address endereço
   */
  BuyeExistingAddres(prodId,amount,address){
    return this.http.post(this.prodRegExistingAddressUrl,{prod_id : [prodId], amount : amount, address : address});
  }

  /**
   * 
   * @param prodId list of ids
   * @param amount amount of eacch product
   * @param address data object holding the address
   */
  BuyRegAddress(prodId,amount,address){ 
    return this.http.post(this.prodRegNewAddress,{prod_id: prodId,amount : amount, address : address});
  }



  removeFromCart(prodId){
    let removeFromCartUrl = 'http://localhost:3000/shop/remove-from-cart';
    return this.http.post(removeFromCartUrl,{prod_id: prodId})
  }



  getCartProducts(){
    return this.http.get(this.getCart);
  }

  /**
   * @return the credCard's  the user
   */
  getUserCredCard(){
    let getCredCard = 'http://localhost:3000/profile/get-credcard';
    return this.http.get(getCredCard).pipe(map(value => {
      console.warn(value);
      let cards = [];
      for (let index = 0; index < value[0].length; index++) {
        cards[index] = value[0][index];        
      }
      return cards;
    }));
  }




  getUserAddress(){
    return this.http.get(this.userAddress).pipe(map(value => {
      let addressData = [];
      for(let i = 0 ; i < value[0].length; i++){
        addressData[i] = {
          address_id : value[0][i].address_id,
          address_streetName : value[0][i].address_streetName,
          address_number : value[0][i].address_number,
          address_city : value[0][i].address_city,
          address_state : value[0][i].address_state,
          address_country : value[0][i].address_country
        }
      }
      //console.log(addressData);
      return addressData;
    }));
  }
}
