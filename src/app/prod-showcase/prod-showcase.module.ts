import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdCardComponent } from './prod-card/prod-card.component'; 
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ShowcaseSideFiltersComponent } from './showcase-side-filters/showcase-side-filters.component';
import { ProdShowcaseComponent } from './prod-showcase.component';
import { RouterModule } from '@angular/router';


import { ShowcaseTopFiltersComponent } from './showcase-top-filters/showcase-top-filters.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Animations



@NgModule({
  declarations: [
    ProdCardComponent,
    ShowcaseSideFiltersComponent,// 
    ProdShowcaseComponent, //esse
    ShowcaseTopFiltersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
   ProdShowcaseComponent,
  ],
  providers: []
})
export class ProdShowcaseModule { }
