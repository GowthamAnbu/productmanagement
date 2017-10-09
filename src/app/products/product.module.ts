import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';

import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/conver-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';

import { ProductGuardService } from './product-guard.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'products', component:ProductListComponent},
      {path:'products/:id',
        canActivate:[ProductGuardService], 
        component:ProductDetailComponent}
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,
  ],
  providers:[
    ProductService,
    ProductGuardService]
})
export class ProductModule { }
