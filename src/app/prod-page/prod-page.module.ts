import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdPageComponent } from './prod-page.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { MatDividerModule} from '@angular/material/divider';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { DetailsInfoComponent } from './details-info/details-info.component';
import { RatingInfoComponent } from './rating-info/rating-info.component';
import { ProdRecomendedComponent } from './prod-recomended/prod-recomended.component';
import { LightCardComponent } from '../light-card/light-card.component';
import { ProdInfoComponent } from './prod-info/prod-info.component';
import { ProdImgHolderComponent } from './prod-img-holder/prod-img-holder.component';
import { EditableComponent } from './editable/editable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditModeDirective } from './editable/editable-directives/edit-mode/edit-mode.directive';
import { EditableInfoComponent } from './editable-info/editable-info.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatInputModule } from '@angular/material/input';
import { ProdInfoDetailComponent } from './prod-info/prod-info-detail/prod-info-detail.component';
import { CompleteProdRequestService } from './complete-prod-request.service';
import { HttpClientModule } from '@angular/common/http';
//Directives below
import { SharedModule } from '../shared-module/shared-module.module';
import { Routes, RouterModule } from '@angular/router';
import { ProdPageResolver } from './resolvers/prod-page.resolver';






@NgModule({
  declarations: [
    ProdPageComponent,
    GeneralInfoComponent,
    DetailsInfoComponent,
    RatingInfoComponent,
    ProdRecomendedComponent,
    
    ProdInfoComponent,
    ProdImgHolderComponent,
    EditableComponent,
    EditModeDirective,
    EditableInfoComponent,
    ProdInfoDetailComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    //Angular Material
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCheckboxModule,
    //Angular material Behaviors
    ScrollDispatchModule,
    HttpClientModule,
  ],
  exports:[
    ProdPageComponent,
    GeneralInfoComponent,
    DetailsInfoComponent,
    RatingInfoComponent,

  ],
  providers:[
    CompleteProdRequestService,
    ProdPageResolver
  ]
})
export class ProdPageModule { }
