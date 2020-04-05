import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerPageComponent } from './seller-page.component';

import {ProdShowcaseModule} from '../prod-showcase/prod-showcase.module';


@NgModule({
  declarations: [
    SellerPageComponent,
  ],
  imports: [
    CommonModule,
    ProdShowcaseModule
  ],
  exports:[
    SellerPageComponent,
  ]
})
export class SellerPageModule { }
