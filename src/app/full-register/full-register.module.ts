import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullRegisterComponent } from './full-register.component';
import { 
  MatDialogModule, MatInputModule, MatAutocompleteModule, 
  MatDatepickerModule, MatFormFieldModule, MatButtonModule, 
  MatButtonToggleModule, MatCheckboxModule, MatNativeDateModule,
  MatSelectModule,MatRadioModule,MatDividerModule

} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EasyLoginComponent } from './easy-login/easy-login.component';
import { MatTabsModule } from '@angular/material/tabs';

import { AddressRegComponent } from './address-reg/address-reg.component';
import { CardRegistrationComponent } from './card-registration/card-registration.component';
import { AuthenticationService } from '../_helpers/Authentication.service';




@NgModule({
  declarations: [
    FullRegisterComponent,
    EasyLoginComponent,
    AddressRegComponent,
    CardRegistrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule,
    MatDialogModule


  ],
  exports:[
    FullRegisterComponent,
    EasyLoginComponent,
    AddressRegComponent,
    CardRegistrationComponent,
  ],
  providers: [
    AuthenticationService
  ]
})
export class FullRegisterModule { }
