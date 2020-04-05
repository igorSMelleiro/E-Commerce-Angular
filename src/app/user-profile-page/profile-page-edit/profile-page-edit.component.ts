import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileActionsService } from '../user-profile-page-user.service';

@Component({
  selector: 'app-profile-page-edit',
  templateUrl: './profile-page-edit.component.html',
  styleUrls: ['./profile-page-edit.component.styl']
})
export class ProfilePageEditComponent implements OnInit {

  onlyNumAndCharRegex   = new RegExp(/[^a-zA-Z0-9.\s]/gm);
  onlyLetterRegex = new RegExp(/[^a-zA-Z\s]/gm);
  onlyNumbersRegex =  new RegExp(/[^0-9.\s]/gm);

  profileGroup : FormGroup;
  addressGroup : FormGroup;
  cardGroup : FormGroup;

  editModeAddress = false;
  editModePassword = false;

  profileCompleteInfo : any;

  constructor(private routeActiveted : ActivatedRoute, private profileActions : ProfileActionsService) { }

  ngOnInit() {
    this.profileData();
    this.profileGroup = new FormGroup({
      profileName : new FormControl(
        {value: this.profileCompleteInfo.profileGeneral[0].usr_name ,disabled:false}),

      profileEmail : new FormControl(
        {value: this.profileCompleteInfo.profileGeneral[0].usr_email ,disabled:false}
      ),
      profilePhone1 : new FormControl(
        {value: this.profileCompleteInfo.profileGeneral[0].usrdetail_firstPhone ,disabled:false}
      ),
      profilePhone2 : new FormControl(
        {value: this.profileCompleteInfo.profileGeneral[0].usrdetail_secondPhone ,disabled:false}
      )
    });
    this.addressGroup = new FormGroup({
      addressId : new FormControl(''),
      addressStreet : new FormControl(''),
      addressNum :  new FormControl(''),
      addressCep : new FormControl(''),
      addressCountry : new FormControl(''),
      addressState : new FormControl(''),
      addressCity : new FormControl('')
    })
    this.cardGroup = new FormGroup({
      cardOwnerName : new FormControl(''),
      cardNumber :  new FormControl(''),
      cardValidationDate : new FormControl(''),
      cardSecurityCode : new FormControl(''),
      ownerCpf : new FormControl('')
    })
  }
  profileData(){
    this.routeActiveted.data.subscribe(results => {
      console.log(results);
      this.profileCompleteInfo = results;
    });
  }
  saveProfile(){

  } 
  addNewAddress(){

  }
  editAddress(addressId){
    let addresses : Array<any> = this.profileCompleteInfo.profileAddresses;
    let address = addresses.filter(results => {
      if(results['address_id'] == addressId){
        return results;
      }
    })
    this.addressGroup.controls.addressId.setValue(address[0].address_id);
    this.addressGroup.controls.addressStreet.setValue(address[0].address_streetName)
    this.addressGroup.controls.addressNum.setValue(address[0].address_number)
    this.addressGroup.controls.addressCep.setValue(address[0].address_cep)
    this.addressGroup.controls.addressCity.setValue(address[0].address_city)
    this.addressGroup.controls.addressState.setValue(address[0].address_state)
    this.addressGroup.controls.addressCountry.setValue(address[0].address_country)
    this.addressEditState();
    //this.addressGroup.get('addressStreet').setValue();
  }
  passwordChangeState(){
    this.editModePassword = !this.editModePassword;
  }
  addressEditState(){
    this.editModeAddress = !this.editModeAddress;
  }
  saveAddressChanges(){
    let address = {
      address_id : this.addressGroup.controls.addressId.value,
      address_streetName : this.addressGroup.controls.addressStreet.value,
      address_number : this.addressGroup.controls.addressNum.value,
      address_cep :  this.addressGroup.controls.addressCep.value,
      address_city : this.addressGroup.controls.addressCity.value,
      address_state : this.addressGroup.controls.addressState.value,
      address_country :this.addressGroup.controls.addressCountry.value
    }
    this.profileActions.updateAddress(address).subscribe(res => this.ngOnInit());
  } 
  deleteAddress(addressId){
    this.profileActions.deleteAddress(addressId).subscribe(res => console.log(res));
  }
  saveCredCardChanges(){

  }
}
