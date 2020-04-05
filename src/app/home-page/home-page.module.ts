import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HighlilghtsBannerComponent } from './highlilghts-banner/highlilghts-banner.component';

import { RouterModule, Router } from '@angular/router';
import { MatButtonModule, MatButtonToggleModule,MatIconModule } from '@angular/material';
import { InfinitBoardComponent } from './infinit-board/infinit-board.component';
import { SharedModule } from '../shared-module/shared-module.module';
import { InfinityBoardResolver } from './resolvers/infinity-board.resolver';
import { FullRegisterModule } from '../full-register/full-register.module';

@NgModule({
  declarations: [
    HomePageComponent, 
    HighlilghtsBannerComponent, 
    InfinitBoardComponent, 
    
    
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    SharedModule,
    FullRegisterModule
    
    
  ],
  exports: [
     HomePageComponent,
     HighlilghtsBannerComponent, 
     
  ],
  providers : [
    
  ]
})
export class HomePageModule { }   
