import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlashSalePage } from './flash-sale';

@NgModule({
  declarations: [
    FlashSalePage,
  ],
  imports: [
    IonicPageModule.forChild(FlashSalePage),
  ],
})
export class FlashSalePageModule {}
