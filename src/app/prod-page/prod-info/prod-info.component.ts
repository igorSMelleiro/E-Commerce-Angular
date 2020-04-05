import { Component,OnInit ,Input ,Output ,EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FullProdData } from '../full-prod-data';
import { CompleteProdRequestService } from '../complete-prod-request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ShopManagerService } from 'src/app/shop-manager/shop-manager.service';
import { AuthenticationService } from 'src/app/_helpers/Authentication.service';

@Component({
  selector: 'app-prod-info',
  templateUrl: './prod-info.component.html',
  styleUrls: ['./prod-info.component.styl']
})
export class ProdInfoComponent implements OnInit {

  

  @Input() prodInfo  ;

  sameUser = false;
  

  isPromotional : Boolean =  true; //Mostra banner Promocional caso Esteja em promoção
  hasInstallment : Boolean = false; //Mostra valores de parcela caso seja parcelavel
  hasColors : Boolean = true;      // Mostra opções de cores 
  colorsCountTest : Number = 18;   
  nums : Array<Number> = [];

  available;

  amountSelected : number = 1;
  constructor(
    private route : Router ,
    private btnEvents : CompleteProdRequestService,
    private shopManager: ShopManagerService,
    private auth :AuthenticationService,
    private routeActive : ActivatedRoute
    ) 
  {
    

    
    for(let i = 0; i < this.colorsCountTest; i++){
      this.nums[i] =  i;
    }
   }
   
  ngOnInit() {
    console.log(this.prodInfo);
    this.isSameUser();
    console.log(this.sameUser);
  }

  onBuyNow(){
    this.route.navigate(['../../shop_finalization']);
    this.shopManager.OnBuyNow(this.prodInfo,this.amountSelected);
  }
  addFavorite(){
    this.btnEvents.addToFavorite(this.prodInfo.prod_id).subscribe(x => console.log(x));
  }
  addToCart (){
    this.btnEvents.addProdToCart(this.prodInfo.prod_id).subscribe(x => console.log(x));
  }
  decrement(){
    this.amountSelected -= 1;
    if(this.amountSelected <= 1){
      this.amountSelected = 1;
    }
  }
  increment(){
    this.amountSelected += 1;
    if(this.amountSelected >= this.prodInfo.prod_stockAmount){
      this.amountSelected = this.prodInfo.prod_stockAmount;
    }
  }
  isSameUser(){
      console.log(this.routeActive.snapshot.params.id2);
      if(this.auth.currentUserValue.user_id == this.routeActive.snapshot.params.id2){
        return true
      }
    else{
      return false;
    }
  }
}
