import { BrowserModule } from '@angular/platform-browser';    
import { NgModule } from '@angular/core';


import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';
import { ProdShowcaseModule } from './prod-showcase/prod-showcase.module';
import { PageHeaderComponent } from './page-header/page-header.component';

import { FullRegisterModule } from './full-register/full-register.module';

import { ProdPageModule } from './prod-page/prod-page.module';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { UserProfilePageModule } from './user-profile-page/user-profile-page.module';
import { SellerPageModule } from './seller-page/seller-page.module';
import { CardSquaredComponent } from './cards/card-squared/card-squared.component';
import { CardOnebythreeComponent } from './cards/card-onebythree/card-onebythree.component';
import { CardThreebyoneComponent } from './cards/card-threebyone/card-threebyone.component';

import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


import { SharedModule } from './shared-module/shared-module.module';
import { UserProfilePageRoutingModule } from './user-profile-page/user-profile-page-routing.module';
import { ProdRegisterPageModule } from './prod-register-page/prod-register-page.module';
import { EasyLoginComponent } from './full-register/easy-login/easy-login.component';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { SearchService } from './shared-services/search.service';
import { CanActivateGuard } from './_helpers/auth.guard';
import { HttpErrorInterceptor } from './_helpers/http-error.interceptor';
import { ProdPageRoutingModule } from './prod-page/prod-page-routing.module';
import { ShopManagerService } from './shop-manager/shop-manager.service';
import { TextFormatingRegexpBasedDirective } from './_utils/text-formating-regexp-based.directive';
import { InfinityBoardResolver } from './home-page/resolvers/infinity-board.resolver';


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    CardSquaredComponent,
    CardOnebythreeComponent,
    CardThreebyoneComponent
   // TextFormatingRegexpBasedDirective
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProdShowcaseModule,
    FullRegisterModule,
    ProdPageModule,
    HttpClientModule,
    UserProfilePageModule,
    SellerPageModule,
    ProdRegisterPageModule,
    SharedModule,
    ProdPageRoutingModule,
    UserProfilePageRoutingModule,
    
    //Angular Material
    MatDialogModule,
    MatIconModule,
    
       
  ],
  exports:[
  
  ],
  //*This is for dynamically added components that are added using ViewContainerRef.createComponent().
  entryComponents:[
    EasyLoginComponent
  ],
  providers: [
    InfinityBoardResolver,
    CanActivateGuard,
    SearchService, //Singleton service that handles user search
    HttpClientModule,
    ShopManagerService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true 
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpErrorInterceptor, 
      multi: true 
    },
    {
      provide: MatDialogModule,
      useValue: {}
    }, 
    {
      provide: MAT_DIALOG_DATA,
      useValue: {} // Add any data you wish to test if it is passed/used correctly
    },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
