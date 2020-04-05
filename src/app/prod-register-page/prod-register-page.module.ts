import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdRegisterPageComponent } from './prod-register-page.component';
import { FirstStepComponent } from './first-step/first-step.component';

//Material Components
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatStepperModule, MatInputModule, MatButtonModule, MatDividerModule, MatRadioModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Cdk Behaviors
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FullRegisterModule } from '../full-register/full-register.module';
import { AddressRegComponent } from '../full-register/address-reg/address-reg.component';
import { ConfirmFormComponent } from './confirm-form/confirm-form.component';


@NgModule({
  declarations: [
    ProdRegisterPageComponent, 
    FirstStepComponent,
    ConfirmFormComponent
    
  ],
  imports: [
    CommonModule,
    CdkStepperModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    FullRegisterModule,
    MatRadioModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class ProdRegisterPageModule { }
