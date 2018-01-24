import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Product } from '../../models/products'
import { SharedBasket } from '../../services/shared-basket'
import { ProductPage } from '../product/product';



@IonicPage()
@Component({
	selector: 'page-basket',
	templateUrl: 'basket.html',
})



export class BasketPage {

	  contenuPanier: Product[] ;
		prixDuPanier: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sharedBasket: SharedBasket, private alertCtrl: AlertController) {

		this.contenuPanier = this.sharedBasket.getBasket();
		this.prixDuPanier = this.sharedBasket.getTotalPrice();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasketPage');
  }



	SelectionProduit(event, produit){
    this.navCtrl.push(ProductPage,{name: produit});
   }

	 RetirerPanier(event, produit)
	 {
	   let alert = this.alertCtrl.create({
	     title: 'Confirmation',
	     message: 'Voulez-vous retirer ce produit du panier ?',
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
	           this.sharedBasket.removeFromBasket(produit);
						 this.prixDuPanier = this.sharedBasket.getTotalPrice();
	         }
	       }
	     ]
	   });
	   alert.present();
	 }

	 PasserCommande(){

	 }


}
