import { Component, OnInit,OnChanges, } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-full-register',
  templateUrl: './full-register.component.html',
  styleUrls: ['./full-register.component.styl']
})
export class FullRegisterComponent implements OnInit,OnChanges { 
  profileRegistration = new FormGroup({
    usrName : new FormControl(),
    usrLastName : new FormControl(),
    usrNickName : new FormControl(),
    usrEmail : new FormControl(),
    usrPassword : new FormControl(),
    usrConfirmedPassword : new FormControl(),
    usrSSN : new FormControl(),
    usrBirthDate : new FormControl(new Date()),
    address : new FormGroup({ 
      usrCountry : new FormControl(),
      usrState : new FormControl(),
      usrCity :  new FormControl(),
      usrZipCode :  new FormControl(),
      usrStreet : new FormControl(),
      usrAdInfo : new FormControl()
    }),
    usrPhoneNum :  new FormControl(),
    PrivacePolicyAgmnt : new FormControl()
  });
  serializedDate = new FormControl((new Date()).toISOString());
  
  constructor() {



   }

  ngOnInit() {
  }

  ngOnChanges(){

  }
 


}
