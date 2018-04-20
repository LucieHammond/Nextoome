import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, AlertController} from "ionic-angular";
import {Product} from "@models/products";
import {SharedBasket} from "@services/shared-basket";
import {ProductPage} from "../product/product";
import {DeliveryPage} from "../delivery/delivery";


@IonicPage()
@Component({
	selector: 'page-basket',
	templateUrl: 'basket.html',
})
export class BasketPage {

	contenuPanier: Product[];
	prixDuPanier: string;
	emptyBasket: boolean = true;

	constructor(public navCtrl: NavController, public navParams: NavParams, public sharedBasket: SharedBasket, private alertCtrl: AlertController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad BasketPage');
		this.contenuPanier = this.sharedBasket.getBasket();
		this.prixDuPanier = this.sharedBasket.getTotalPrice().toFixed(2);
		this.emptyBasket = this.sharedBasket.isEmpty();
	}

	SelectionProduit(event, produit) {
		this.navCtrl.push(ProductPage, {name: produit});
	}

	increase(event, produit) {
		this.sharedBasket.increase(produit);
		this.prixDuPanier = this.sharedBasket.getTotalPrice().toFixed(2);
	}

	decrease(event, produit) {
		this.sharedBasket.decrease(produit);
		this.prixDuPanier = this.sharedBasket.getTotalPrice().toFixed(2);
	}

	RetirerPanier(event, produit) {
		let alert = this.alertCtrl.create({
			title: 'Confirmation',
			message: 'Voulez-vous retirer ce produit du panier ?',
			buttons: [
				{
					text: 'Annuler',
					role: 'cancel',
					handler: () => {}
				},
				{
					text: 'Confirmer',
					handler: () => {
						this.sharedBasket.removeFromBasket(produit);
						this.prixDuPanier = this.sharedBasket.getTotalPrice().toFixed(2);
						this.emptyBasket = this.sharedBasket.isEmpty();
					}
				}]
		});
		alert.present();
	}

	PasserCommande(event) {
		this.navCtrl.push(DeliveryPage);
	}

}
