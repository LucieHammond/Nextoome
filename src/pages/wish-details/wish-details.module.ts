import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WishDetailsPage } from './wish-details';

@NgModule({
  declarations: [
    WishDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(WishDetailsPage),
  ],
})
export class WishDetailsPageModule {}
