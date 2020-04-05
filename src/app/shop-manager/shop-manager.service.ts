import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';






@Injectable({providedIn: 'root'})
export class ShopManagerService {
    public currentBuyingProd = [];
    public currentBuyingProdAmount = [];

    private sellProductUrl = 'http://localhost:3000/profile/get-cart-user';
    constructor(private http : HttpClient, private route : Router){}


    OnBuyNow(prodId,prodAmount){
        //this.currentBuyingProd = [];
        this.currentBuyingProd = [prodId];
        this.currentBuyingProdAmount = [prodAmount];
    }

    /** 
     * @param usrId 
     * @param prodId 
     */
    onBuyCart(){
        this.currentBuyingProd = [];
        this.currentBuyingProdAmount = [];
        return this.http.get(this.sellProductUrl).pipe(map(products => {
            console.log(products);
           
            for (let i = 0; i < products.length; i++) {
                this.currentBuyingProd[i] = products[i];
                this.currentBuyingProdAmount[i] = 1;
            }
            this.route.navigate(['shop_finalization']);
            
        })).toPromise();
    }
}