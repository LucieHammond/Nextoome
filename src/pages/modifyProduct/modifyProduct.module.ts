import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifyProductPage } from './modifyProduct';

@NgModule({
  declarations: [
    ModifyProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifyProductPage),
  ],
})
export class ModifyProductPageModule {}
