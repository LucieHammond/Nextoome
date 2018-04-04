import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteProductPage } from './deleteProduct';

@NgModule({
  declarations: [
    DeleteProductPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteProductPage),
  ],
})
export class DeleteProductPageModule {}
