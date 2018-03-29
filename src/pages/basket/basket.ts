import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Product } from '../../models/products'
import { SharedBasket } from '../../services/shared-basket'
import { ProductPage } from '../product/product';
import { LivraisonPage } from '../livraison/livraison';



@IonicPage()
@Component({
	selector: 'page-basket',
	templateUrl: 'basket.html',
})
export class BasketPage {

	contenuPanier: Product[] ;
	prixDuPanier: number;
	emptyBasket: boolean = true;

	constructor(public navCtrl: NavController, public navParams: NavParams, public sharedBasket: SharedBasket, private alertCtrl: AlertController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad BasketPage');
		this.contenuPanier = this.sharedBasket.getBasket();
		this.prixDuPanier = this.sharedBasket.getTotalPrice();
		this.emptyBasket = this.sharedBasket.isEmpty();
	}

	SelectionProduit(event, produit){
		this.navCtrl.push(ProductPage,{name: produit});
	}

	RetirerPanier(event, produit)
	{
		let alert = this.alertCtrl.create({
	 		title: 'Confirmation',
	 		message: 'Voulez-vous retirer ce produit du panier ?',
	 		buttons: [{
				text: 'Annuler',
				role: 'cancel',
				handler: () => {}
			},
			{
				text: 'Confirmer',
				handler: () => {
					this.sharedBasket.removeFromBasket(produit);
					this.prixDuPanier = this.sharedBasket.getTotalPrice();
					this.emptyBasket = this.sharedBasket.isEmpty();
				}
			}]
		});
		alert.present();
	}

	PasserCommande(event){
		this.navCtrl.push(LivraisonPage);
	}

}
