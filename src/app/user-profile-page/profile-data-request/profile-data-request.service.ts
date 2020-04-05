import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBuyedProd } from '../_interfaces/profile-data';


@Injectable({
  providedIn: 'root'
})
export class ProfileDataRequestService {

  _url : string = "api/tableprod";
  constructor(private http : HttpClient) { }
  
  //Precisa ser alterado -Dummy-
  getTableData() {
    return this.http.get<IBuyedProd[]>(this._url);
  }

}
