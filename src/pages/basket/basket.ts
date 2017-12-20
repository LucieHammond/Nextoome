import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/products'
import { SharedBasket } from '../../services/shared-basket'
import { ProductPage } from '../product/product';


@IonicPage()
@Component({
	selector: 'page-basket',
	templateUrl: 'basket.html',
})


export class BasketPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedBasket: SharedBasket) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasketPage');
  }

  contenuPanier: Product[] = this.sharedBasket.getBasket();

	SelectionProduit(event, produit){
    this.navCtrl.push(ProductPage,{name: produit});
   }

	 RetirerPanier(event, produit){
	    this.sharedBasket.addToBasket(produit);
	 }

}
