import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedBasket } from '../../services/shared-basket'
import { Product } from '../../models/products'

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})


export class ProductPage {

  produit_vu:  Product = this.navParams.get('name');

  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedBasket: SharedBasket) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

AjoutPanier(event){
   this.sharedBasket.addToBasket(this.produit_vu);
}

}
