import { Injectable } from '@angular/core';
import { ProdCardInfo } from './prod-card/prod-card-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchService } from '../shared-services/search.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdShowcaseDiService {

  product_not_sepecified_search : string = 'http://localhost:3000/search/default';
  product_specified_url : string = 'http://localhost:3000/search';
  



  constructor(private http : HttpClient) { }

  searchResolver(value){
   
    return this.http.post<any[]>(this.product_specified_url,  value).pipe(map(value => {
        for (let index = 0; index < value.length; index++) {
          value[index] = {
            prod_id : value[index].prod_id,
            prod_title: value[index].prod_title,
            prod_stockAmount : parseFloat(value[index].prod_stockAmount),
            prod_price : parseFloat(value[index].prod_price),
            prod_discount : parseFloat(value[index].prod_discount),
            prod_shippingfee: parseFloat(value[index].prod_shippingfee),
            image_url : value[index].image_url,
            usr_name : value[index].usr_name,
            usr_id : value[index].usr_id,
            store_name: value[index].store_name,
            store_phone: value[index].store_phone, 
            store_cellphone:value[index].store_cellphone
          }
        }
      return value;
    }));
    
  }
  
  defaultProducts(){
    return this.http.get(this.product_not_sepecified_search);
  }

}
