import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ProdRegService } from './prod-reg.service';
import { FirstStepComponent } from './first-step/first-step.component';
import { AddressRegComponent } from '../full-register/address-reg/address-reg.component';
import { IProductFullData, IProductSpecs, IProdAddress, IExistingAddress } from './Product-interface';
import { AuthenticationService } from '../_helpers/Authentication.service';
import { User } from '../_helpers/user';
import { JsonPipe } from '@angular/common';
import { MatHorizontalStepper } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-register-page',
  templateUrl: './prod-register-page.component.html',
  styleUrls: ['./prod-register-page.component.styl']
})
export class ProdRegisterPageComponent implements OnInit,AfterViewInit {
  
  formData  : any;
  firstStepData ;
  addressStepData ;
  @ViewChild('regStepper', {static:false}) private regSteeper : MatHorizontalStepper
  @ViewChild(FirstStepComponent, {static: false}) private firstStep : FirstStepComponent;
  @ViewChild(AddressRegComponent, {static: false}) private addressStep : AddressRegComponent;
  address = new FormControl(); 
  addresses = [] ;
  selectedAddrId ;

  addressSource = new FormControl('1');
  constructor(
    private prodreg : ProdRegService,
    private auth : AuthenticationService,
    private route : Router
    ){}

  private usr_id  = JSON.parse(localStorage.getItem('currentUser'))
  ngOnInit() {
    
  }PR
  ngAfterViewInit(): void {
    this.fullProductData();
    
  }
  
  
  getFirstStepData() : IProductSpecs{
    this.firstStepData = this.firstStep.firstStep;
    
    return  {
      prod_images: this.firstStep.getProductImages,
      prod_code : this.firstStepData.controls.prodCode.value,
      prod_categ : this.firstStepData.controls.prodCateg.value,
      prod_title : this.firstStepData.controls.prodTitle.value,
      prod_stockAmount : this.firstStepData.controls.prodStockAmount.value,
      prod_price : this.firstStepData.controls.prodPrice.value,
      prod_discount : this.firstStepData.controls.prodDiscount.value,
      user_usr_id : this.usr_id.user_id,
    }
  };
  getAddressFormData() : IProdAddress{
    if(this.address.enable){
      this.addressStepData = this.addressStep.getAddressFormData();
      return {
        
        address_streetName : this.addressStepData.controls.usrStreet.value,
        address_number : this.addressStepData.controls.usrNumber.value,
        address_cep : this.addressStepData.controls.usrZipCode.value,
        address_city : this.addressStepData.controls.usrCity.value,
        address_state : this.addressStepData.controls.usrState.value,
        address_country : this.addressStepData.controls.usrCountry.value
      }
    }
    else{
      //get Addresses registered in the account logged

    }

    console.log(this.addressStep)
  };

  private selection(select) {
    if(select.selectedIndex == 1){
      this.prodreg.getUserAddress().subscribe(address => {
        console.log(address);
        if(address[0].length > 0){
          for(let i = 0 ; i < address[0].length; i++){
            this.addresses[i] = {
              address_id : address[0][i].address_id,
              address_streetName : address[0][i].address_streetName,
              address_number : address[0][i].address_number,
              address_cep : address[0][i].address_cep,
              address_city : address[0][i].address_city,
              address_state : address[0][i].address_state,
              address_country : address[0][i].address_country
            }
          }
        }else{
          
          this.addressSource.setValue(2);
        }
      });
    }

    if(select.selectedIndex == 2){
      this.fullProductData();
      console.log(this.formData);
    }
  }

  selectedAddressId(addressId){
    this.selectedAddrId = addressId.value;
  }


  fullProductData() {
    if(this.addressSource.value == 2){
      console.warn('getting from Form');
      const prodData : IProductFullData= {
        prod_specs : this.getFirstStepData(),
        prod_address : this.getAddressFormData()
      }
      this.formData =  prodData;
    }
    else{
      console.log(`selected id ${this.selectedAddrId}`);
      
      let selectedAddress = this.addresses.filter(value  => {
        console.warn(value['address_id']);
          if(value['address_id'] === this.selectedAddrId){
            return value;
          }
      })
      console.log(selectedAddress)
      const prodData : IProductFullData = {
        
        prod_specs : this.getFirstStepData(),
        prod_address : selectedAddress[0]
      }
      this.formData = prodData;
    }
  }


  register(){
    if(this.firstStep.firstStep.valid && this.addressSource.valid){
      if(this.addressSource.value == 2){
        const prodData : IProductFullData = 
        {
          prod_specs : this.getFirstStepData(),
          prod_address : this.getAddressFormData()
        }
        console.log(prodData);
        this.prodreg.onRegisterProduct(prodData).subscribe(x => console.log(x));
      }else{
        const prodDataExistingAddr : IProductFullData = 
        {
          prod_specs : this.getFirstStepData(),
          prod_addressId : this.selectedAddrId
        }
        console.log(prodDataExistingAddr);
        this.prodreg.oRegProductWithExistingAddress(prodDataExistingAddr).subscribe(x => {
          if(x.published == true){
            this.route.navigate(['user_page/posted']);
          }
          else{
            alert("Ocorreu um erro, verifique se todos os campos estão corretos e tente novamente.")
          }
        });
      }
    }
    else{
      alert("Existem campos com valores invalidos");
    }
  }
  

  /**
   * 
   * @param radioValue the integer value of the matGroup 
   */
  addressSourceChange(radioValue) {
    if(radioValue.value == 1)
      this.address.enable(); 
    else
      this.address.disable();
  }
}
