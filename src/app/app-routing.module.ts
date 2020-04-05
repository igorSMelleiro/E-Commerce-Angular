import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdShowcaseModule } from './prod-showcase/prod-showcase.module';
import { ProdShowcaseComponent } from './prod-showcase/prod-showcase.component';

import { HomePageComponent } from './home-page/home-page.component';
import { HomePageModule } from './home-page/home-page.module';
import { ProdPageComponent } from './prod-page/prod-page.component';
import { FullRegisterComponent }  from './full-register/full-register.component';
import { FullRegisterModule } from './full-register/full-register.module';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { UserProfilePageModule } from './user-profile-page/user-profile-page.module';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { SellerPageModule } from './seller-page/seller-page.module';
import { ShopFinalizationModule } from './shop-finalization/shop-finalization.module';
import { ShopFinalizationComponent } from './shop-finalization/shop-finalization.component';
import { ProdRegisterPageModule } from './prod-register-page/prod-register-page.module';
import { ProdRegisterPageComponent } from './prod-register-page/prod-register-page.component';
import { CanActivateGuard } from './_helpers/auth.guard';

import { InfinityBoardResolver } from './home-page/resolvers/infinity-board.resolver';




const routes: Routes = [
  { 
    path: '', 
    component: HomePageComponent,
    resolve : {
      infinity : InfinityBoardResolver,
    }
  },
  { 
    path: 'search', 
    component: ProdShowcaseComponent,
  },
  {
    path: 'seller_page', 
    component: SellerPageComponent, 
    canActivate: [CanActivateGuard]  
  },
  { 
    path: 'shop_finalization', 
    component: ShopFinalizationComponent,
    canActivate: [CanActivateGuard]
  },
  { 
    path: 'prod_reg', 
    component: ProdRegisterPageComponent, 
    canActivate: [CanActivateGuard]  
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{onSameUrlNavigation:"reload",urlUpdateStrategy:'eager',scrollPositionRestoration:'top'}),
    ProdShowcaseModule,
    FullRegisterModule,
    UserProfilePageModule,
    SellerPageModule,
    ShopFinalizationModule,
    ProdRegisterPageModule
  ],
  exports: [RouterModule, ProdShowcaseModule, HomePageModule]
})

export class AppRoutingModule { }
//export const routingComponents = [ProdShowcaseComponent,HomePageComponent];