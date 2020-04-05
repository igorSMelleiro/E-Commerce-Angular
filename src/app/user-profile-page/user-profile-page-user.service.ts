import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProfileActionsService {

  private update_profile_picture : string = 'http://localhost:3000/profile/update-profile-pic';

  private buyed_url : string = 'http://localhost:3000/user-profile-page/buyed';
  
  private updateProfile : string = 'http://localhost:3000/user-profile-page/update-profile';
  private updatePassword  : string = '';
  private updateAddressUrl : string = 'http://localhost:3000/user-profile-page/update-address';

  private deleteAddressUrl : string = 'http://localhost:3000/user-profile-page/delete-address';
  
  private deletePotedProdUrl : string = 'http://localhost:3000/user-profile-page/delete-posted-prod';
  private editPostedProdUrl : string = 'http://localhost:3000/user-profile-page/edit-posted-prod';
  
  private registerStoreUrl : string = 'http://localhost:3000/user-profile-page/reg-store';
  
  constructor(private http : HttpClient) { }
  
  registerStore(storeData){
    return this.http.post(this.registerStoreUrl,storeData);
  }
  
  updateProfilePic(imageBuffer){
    return this.http.patch(this.update_profile_picture,{image : imageBuffer});
  }

  showBuyedProduct(){
    return this.http.get(this.buyed_url);
  }

  updateAddress(data) {
    console.log(data);
    return this.http.put(this.updateAddressUrl,data);
  }
  deleteAddress(addressId){
    return this.http.post(this.deleteAddressUrl,{address_id: addressId});
  }

  editPostedProd(data){
    return this.http.post(this.editPostedProdUrl,{prod_id : data});
  }
  deletePostedProd(data){
    return this.http.post(this.deletePotedProdUrl,{prod_id : data});
  }
}
