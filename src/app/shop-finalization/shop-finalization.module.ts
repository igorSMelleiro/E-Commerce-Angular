import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopFinalizationComponent } from './shop-finalization.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, MatRadioModule, MatSelectModule, MatDividerModule } from '@angular/material';
import { FullRegisterModule } from '../full-register/full-register.module';
import { ItemBuyedComponent } from './item-buyed/item-buyed.component';
import { ShopFinalizationService } from './shop-finalization.service';

@NgModule({
  declarations: [
    ShopFinalizationComponent,
    ItemBuyedComponent,
    
  ],
  imports: [
    CommonModule,
    CdkStepperModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    
    //material Components
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    
    //custom Form Module
    FullRegisterModule
  ],
  providers: [
    ShopFinalizationService
  ]
})
export class ShopFinalizationModule { }
