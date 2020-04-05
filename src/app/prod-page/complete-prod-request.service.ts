import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FullProdData } from './full-prod-data';

@Injectable({
  providedIn: 'root'
})
export class CompleteProdRequestService {
  private completeProdPath: string =  "http://localhost:3000/prod-page";
  private favorite: string =  "http://localhost:3000/prod-page/reg-favorite";
  private cart: string =  "http://localhost:3000/prod-page/addCart";
  
  constructor(private http : HttpClient) { }

  getCompleteProData(prodId,usrId) {
    return this.http.post(this.completeProdPath,{
      prod_id : prodId,
      usr_id : usrId
    });
  }

  addToFavorite(prodId){
    return this.http.post(this.favorite,{prod_id : prodId});
  }
  addProdToCart(prodId){
    return this.http.post(this.cart,{prod_id :  prodId});
  }
}
