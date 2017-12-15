import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedBasket } from '../../services/shared-basket'

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})


export class ProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedBasket: SharedBasket) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

AjoutPanier(event){
  //contenuPanier.push(produitvu);
   // sharedBasket.addToBasket(this.titre);
}


titre: string = this.navParams.get('name');
//produitvu: product = this.navParams.get('produit');
prix : string = "1,05€"
}
