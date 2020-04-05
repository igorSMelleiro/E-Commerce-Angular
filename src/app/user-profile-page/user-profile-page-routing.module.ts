import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopInfoContainerComponent } from './shop-info-container/shop-info-container.component';
import { UserProfilePageComponent } from './user-profile-page.component';
import { CanActivateGuard } from '../_helpers/auth.guard';
import { ProfileInfoResolver } from './_profile-resolvers/profile-info.resolver';
import { PBuyedResolver } from './_profile-resolvers/prod-buyed.resolver';
import { PSelledResolver } from './_profile-resolvers/prod-selled.resolver';
import { ProfilePageEditComponent } from './profile-page-edit/profile-page-edit.component';
import { ProfileGeneralInfoResolver } from './_profile-resolvers/profile-general-info.resolver';
import { ProfileAddressesResolver } from './_profile-resolvers/profile-address.resolver';
import { ProfileCredCardsResolver } from './_profile-resolvers/profile-credit-cards.resolver';
import { PostedProductsResolver } from './_profile-resolvers/prod-posted.resolver';
import { ProdPostsComponent } from './prod-posts/prod-posts.component';
import { ProdPostsFormComponent } from './prod-posts/prod-posts-form/prod-posts-form.component';
import { StoreInfoResolver } from './_profile-resolvers/store-data.resolver';
import { StoreFormRegComponent } from './store-form-reg/store-form-reg.component';


const routes: Routes = [
  {
    path : 'user_page' ,
    component: UserProfilePageComponent,
    canActivate : [CanActivateGuard],
    runGuardsAndResolvers :"always",
    resolve: {
      profile: ProfileInfoResolver
    },
    children: [ //define as rotas para os components filhos?
      {
        path : 'profile-info',
        component:ProfilePageEditComponent,
        resolve : {
          profileGeneral : ProfileGeneralInfoResolver,
          profileAddresses: ProfileAddressesResolver,
          profileCredCards : ProfileCredCardsResolver
        }
      },
      {
        path: '',
        redirectTo : 'buyed',
        pathMatch:'full',
        resolve: {
          buyed : PBuyedResolver
        }
      },
      {
        path: 'buyed',
        component:ShopInfoContainerComponent,
        resolve: {
          buyed : PBuyedResolver
        }
      },
      {
        path: 'selled',
        component:ShopInfoContainerComponent,
        resolve: {
          buyed : PSelledResolver
        }
      },
      {
        path: 'on-going',
        component:ShopInfoContainerComponent,
      },
      {
        path: 'finished',
        component:ShopInfoContainerComponent,
      },
      {
        path: 'cancelated',
        component:ShopInfoContainerComponent,
      },
      {
        path: 'posted',
        component:ProdPostsComponent,
        resolve: {
          buyed : PostedProductsResolver
        }
      },
      {
        path: 'store',
        component: StoreFormRegComponent,
        resolve : {
          buyed : StoreInfoResolver
        }
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ProfileInfoResolver
  ]
})
export class UserProfilePageRoutingModule { }
