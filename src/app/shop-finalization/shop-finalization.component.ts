import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { IProductSpecs, IProdAddress } from '../prod-register-page/Product-interface';
import { AddressRegComponent } from '../full-register/address-reg/address-reg.component';
import { ShopFinalizationService } from './shop-finalization.service';
import { MatHorizontalStepper, MatStepper } from '@angular/material/stepper';
import { AuthenticationService } from '../_helpers/Authentication.service';
import { Observable } from 'rxjs/internal/Observable';
import { ShopManagerService } from '../shop-manager/shop-manager.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shop-finalization',
  templateUrl: './shop-finalization.component.html',
  styleUrls: ['./shop-finalization.component.styl']
})
export class ShopFinalizationComponent implements OnInit {


  
  addressStepData ;

  shopFinalizationControl : FormGroup;



  existingAddress = new FormControl(); 
  addresses : Observable<any[]> ;
  credCards : Observable<any[]>;
  address = new FormControl();
  selectedAddrId ;
  @ViewChild('stepper', {static: true}) private shopStepper : MatStepper;
  @ViewChild(AddressRegComponent, {static: false}) private addressStep : AddressRegComponent;

  cardData = [];
  amountBuyed = [1];

  addressRadio = 1;

  constructor(
    private finalizationService : ShopFinalizationService,
     private auth : AuthenticationService, 
     private route : Router,
     private shopManager : ShopManagerService) { 
    this.shopFinalizationControl = new FormGroup({
      loginStep : new FormControl('0'),
      cartStep : new FormControl('1'),
      addressStep : new FormControl('2'),
      paymentStep : new FormControl('3'),
      finalizationStep : new FormControl('4')
    });
  }

  userValidated;
  ngOnInit() {
    this.amountBuyed = this.shopManager.currentBuyingProdAmount;
    //* Initialized Variables
     this.credCards =  this.finalizationService.getUserCredCard();
    //console.warn(this.credCards);
    //navigate to profile page if there is no product
    if(this.shopManager.currentBuyingProd.length < 1){
      this.route.navigate(['../user_page/buyed']);
    }
    this.auth.currentUser.subscribe(authRes => {
      if(authRes.user_validated == true){
        //console.log(this.shopStepper);
        this.shopStepper.selectedIndex = 1;
        this.userValidated = true;

      }
      else{
        this.userValidated = false
      }
    });
    if(this.userValidated){
      this.addresses = this.finalizationService.getUserAddress();
    }
    console.warn(this.shopManager.currentBuyingProd);
    // for(let i = 0; i < this.shopManager.currentBuyingProd.length ; i++){
      this.cardData = this.shopManager.currentBuyingProd;
    // }
    console.warn(this.cardData);
  }
  
  
  getAddressFormData() : IProdAddress{
    if(this.existingAddress.disabled){
      this.addressStepData = this.addressStep.getAddressFormData();
      console.log(this.addressStepData);
      return {
        address_streetName : this.addressStepData.controls.usrStreet.value,
        address_number : this.addressStepData.controls.usrNumber.value,
        address_cep : this.addressStepData.controls.usrZipCode.value,
        address_city : this.addressStepData.controls.usrCity.value,
        address_state : this.addressStepData.controls.usrState.value,
        address_country : this.addressStepData.controls.usrCountry.value
      }
    }
  }

  private selection(select) {
    
  }

  selectedAddressId(addressId){
    this.selectedAddrId = addressId.value;
  }
  removeProd(index){
    let cardId = this.cardData[index].prod_id;
    this.cardData.splice(index,1);
    
    this.finalizationService.removeFromCart(cardId).subscribe(x => console.log(x));
  }


  

  addressSourceChange(radioValue) {
    if(radioValue.value == 1){
      this.existingAddress.enable(); 
      this.addressRadio = radioValue.value;
    }
    else{
      this.existingAddress.disable();
      this.addressRadio = radioValue.value;
    }
      
  }


  //Returns the address form info passed
  addressFormState(event : FormGroup)  {
    
  }



  finishShopping(){
    let prodIds = [];
    let prodAmounts = [];
    
    for (let index = 0; index < this.cardData.length; index++) {
      prodIds[index] = this.cardData[index].prod_id;
      prodAmounts[index] = this.amountBuyed[index];
    }
    if(this.addressRadio > 1){
      this.finalizationService.BuyRegAddress(prodIds,prodAmounts,
        [
          this.getAddressFormData().address_streetName,
          this.getAddressFormData().address_number,
          this.getAddressFormData().address_cep,
          this.getAddressFormData().address_city,
          this.getAddressFormData().address_state,
          this.getAddressFormData().address_country
        ])
      .subscribe(x => console.log(x));
    } else {
      let ids = this.cardData.map(x => {
        return x['prod_id'];
      })
      console.log(ids);
      this.finalizationService.BuyeExistingAddres(ids,this.amountBuyed,this.selectedAddrId)
      .subscribe(x =>{
        if(x.buyed == true){
          this.route.navigate(['user_page/buyed']);
        }
      } );
    }  
  }
}
