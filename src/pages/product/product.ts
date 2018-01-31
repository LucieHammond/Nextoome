import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SharedBasket } from '../../services/shared-basket'
import { Product } from '../../models/products'


@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})


export class ProductPage {

  produit_vu:  Product = this.navParams.get('name');

  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedBasket: SharedBasket, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }


AjoutPanier(event) {
  let alert = this.alertCtrl.create({
    title: 'Confirmation',
    message: 'Voulez-vous ajouter cet article à votre panier ?',
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {

        }
      },
      {
        text: 'Confirmer',
        handler: () => {
          this.sharedBasket.addToBasket(this.produit_vu);
          this.navCtrl.pop();
        }
      }
    ]
  });
  alert.present();
}


}
