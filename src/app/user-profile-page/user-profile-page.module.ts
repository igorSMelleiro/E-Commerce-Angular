import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfilePageComponent } from './user-profile-page.component';
import { ShopInfoContainerComponent } from './shop-info-container/shop-info-container.component';

//Angular material Modules Start
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatDialogModule } from '@angular/material';

import { InnerExpandableResComponent } from './inner-expandable-res/inner-expandable-res.component';
import { MatTreeModule } from '@angular/material/tree';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { UserProfilePageRoutingModule } from './user-profile-page-routing.module';
import { ProfileActionsService } from './user-profile-page-user.service';
import { PBuyedResolver } from './_profile-resolvers/prod-buyed.resolver';
import { PSelledResolver } from './_profile-resolvers/prod-selled.resolver';
import { ProfilePageEditComponent } from './profile-page-edit/profile-page-edit.component';
import { TextFormatingRegexpBasedDirective } from '../_utils/text-formating-regexp-based.directive';
import { ProfileGeneralInfoResolver } from './_profile-resolvers/profile-general-info.resolver';
import { ProfileAddressesResolver } from './_profile-resolvers/profile-address.resolver';
import { ProfileCredCardsResolver } from './_profile-resolvers/profile-credit-cards.resolver';
import { PostedProductsResolver } from './_profile-resolvers/prod-posted.resolver';
import { ProdPostsComponent } from './prod-posts/prod-posts.component';
import { ProdPostsFormComponent } from './prod-posts/prod-posts-form/prod-posts-form.component';
import { StoreFormRegComponent } from './store-form-reg/store-form-reg.component';

//Angular material Modules End

@NgModule({
  declarations: [
    UserProfilePageComponent,
    ShopInfoContainerComponent,
    
    InnerExpandableResComponent,
    SidenavContentComponent,
    ProfilePageEditComponent,
    TextFormatingRegexpBasedDirective,
    ProdPostsComponent,
    ProdPostsFormComponent,
    StoreFormRegComponent,
    
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSidenavModule,
    MatFormFieldModule, 
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    UserProfilePageRoutingModule,
    HttpClientInMemoryWebApiModule,
    HttpClientModule  
  ],
  exports: [
    UserProfilePageComponent
  ],
  entryComponents: [
    
  ],

  providers: [
    ProfileActionsService,
    PBuyedResolver,
    PSelledResolver,
    ProfileGeneralInfoResolver,
    ProfileAddressesResolver,
    ProfileCredCardsResolver,
    PostedProductsResolver
  ]
})
export class UserProfilePageModule { }
