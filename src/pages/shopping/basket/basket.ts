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

	basket: Product[];
	basketPrice: string;
	emptyBasket: boolean = true;

	constructor(public navCtrl: NavController, public navParams: NavParams, public sharedBasket: SharedBasket, private alertCtrl: AlertController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad BasketPage');
		this.basket = this.sharedBasket.getBasket();
		this.basketPrice = this.sharedBasket.getTotalPrice().toFixed(2);
		this.emptyBasket = this.sharedBasket.isEmpty();
	}

	selectProduct(event, product) {
		this.navCtrl.push(ProductPage, {name: product});
	}

	increase(event, product) {
		this.sharedBasket.increase(product);
		this.basketPrice = this.sharedBasket.getTotalPrice().toFixed(2);
	}

	decrease(event, product) {
		this.sharedBasket.decrease(product);
		this.basketPrice = this.sharedBasket.getTotalPrice().toFixed(2);
	}

	removeFromBasket(event, product) {
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
						this.sharedBasket.removeFromBasket(product);
						this.basketPrice = this.sharedBasket.getTotalPrice().toFixed(2);
						this.emptyBasket = this.sharedBasket.isEmpty();
					}
				}]
		});
		alert.present();
	}

	order(event) {
		this.navCtrl.push(DeliveryPage);
	}

}
