import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Product } from '../../models/products'
import { SharedBasket } from '../../services/shared-basket'
import { ProductPage } from '../product/product';



@IonicPage()
@Component({
	selector: 'page-livraison',
	templateUrl: 'livraison.html',
})
export class LivraisonPage {

	contenuPanier: Product[] ;
	prixDuPanier: number;
	commentaires: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public sharedbasket: SharedBasket) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad livraisonPage');
		this.contenuPanier = this.sharedbasket.getBasket();
			this.prixDuPanier = this.sharedbasket.getTotalPrice();
		}

		PasserCommande(event){

		}

}
