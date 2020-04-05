import { Component, OnInit } from '@angular/core';
import { ProfileActionsService } from '../user-profile-page-user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-store-form-reg',
  templateUrl: './store-form-reg.component.html',
  styleUrls: ['./store-form-reg.component.styl']
})
export class StoreFormRegComponent implements OnInit {

  constructor(private actions : ProfileActionsService) { }
  storeFormGroup : FormGroup;
  ngOnInit() {
    this.storeFormGroup = new FormGroup({
      storeName : new FormControl(''),
      storeCnpj : new FormControl(''),
      storePhone : new FormControl(''),
      storeCellphone : new FormControl('')
    })
  }

  registerStore(){ 
    let storeData = {
      store_name : this.storeFormGroup.get('storeName').value,
      store_cnpj :  this.storeFormGroup.get('storeCnpj').value,
      store_phone : this.storeFormGroup.get('storePhone').value,
      store_cellphone : this.storeFormGroup.get('storeCellphone').value
    }
    this.actions.registerStore(storeData).subscribe(x => console.log(x));
  }

}
