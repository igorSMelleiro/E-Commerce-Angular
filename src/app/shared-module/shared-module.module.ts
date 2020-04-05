import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightCardComponent } from '../light-card/light-card.component';
import { CategoryTreeComponent } from '../category-tree/category-tree.component'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LightCardComponent,
    CategoryTreeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LightCardComponent,
    CategoryTreeComponent
    
  ]
})
export class SharedModule { }
