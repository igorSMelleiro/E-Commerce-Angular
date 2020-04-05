import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdPageComponent } from './prod-page.component';
import { ProdPageResolver } from './resolvers/prod-page.resolver';


const routes: Routes = [
    {
        path: 'prod_page/:id/:id2',
        component: ProdPageComponent,
        resolve: {
            product : ProdPageResolver,
        }
        
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [],
})
export class ProdPageRoutingModule { }