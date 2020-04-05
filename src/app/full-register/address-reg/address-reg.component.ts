import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-address-reg',
  templateUrl: './address-reg.component.html',
  styleUrls: ['./address-reg.component.styl']
})
export class AddressRegComponent implements OnInit {

  onlyLettersRegex : RegExp = new RegExp(/^[a-zA-Z]+$/);
  
  addressGroup = new FormGroup({
    usrCountry : new FormControl('',[
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(40)
    ]),
    usrState : new FormControl('',[
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(40)
    ]),
    usrCity : new FormControl('',[
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20)
    ]),
    usrZipCode : new FormControl('',[
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(14)

    ]),
    usrStreet : new FormControl('',[
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)

    ]),
    usrNumber : new FormControl('',[
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(14)
    ]),
    usrAddressComplement: new FormControl('',[
      Validators.minLength(1),
      Validators.maxLength(40)

    ]),
    usrReference : new FormControl('',[
      Validators.minLength(1),
      Validators.maxLength(40)
    ]),
  })



  constructor() { }

  ngOnInit() {
  
  }
  /**
   * @Tip use ViewChildReference to acess this method
   */
  getAddressFormData () : FormGroup {
    return this.addressGroup;
  }
}
