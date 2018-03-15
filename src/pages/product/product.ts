import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SharedBasket } from '../../services/shared-basket'
import { Product } from '../../models/products'
import { PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})


export class ProductPage {

  produit_vu:  Product = this.navParams.get('name');
  quantity: number = 0 ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedBasket: SharedBasket, private alertCtrl: AlertController, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }


AjoutPanier(event) {
if(this.quantity!=0){
  this.sharedBasket.addToBasket(this.produit_vu,this.quantity);
  this.ConfirmationAchat();

}}

ConfirmationAchat(){
  let alert = this.alertCtrl.create({
    title: 'Confirmation',
    message: this.quantity+" ".concat(this.produit_vu.name.concat(' ajouté au panier !')),
    buttons: [
      {text:'OK',
        handler: () => {this.navCtrl.pop();}
      }]
});
alert.present();
}

}
