import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductByCategoryPage } from './productByCategory';

@NgModule({
  declarations: [
    ProductByCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductByCategoryPage),
  ],
})
export class productByCategoryPageModule {}
