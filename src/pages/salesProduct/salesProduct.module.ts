import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesProductPage } from './salesProduct';

@NgModule({
  declarations: [
    SalesProductPage,
  ],
  imports: [
    IonicPageModule.forChild(SalesProductPage),
  ],
})
export class SalesProductPageModule {}
