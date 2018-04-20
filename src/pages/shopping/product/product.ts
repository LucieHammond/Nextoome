import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, AlertController, PopoverController} from "ionic-angular";
import {SharedBasket} from "@services/shared-basket";
import {SessionInfos} from "@services/session-infos";
import {Product} from "@models/products";


@IonicPage()
@Component({
	selector: 'page-product',
	templateUrl: 'product.html',
})


export class ProductPage {

	product: Product = this.navParams.get('name');
	quantity: string = '0';
	isOnSale: boolean = this.product.on_sale;

	constructor(public navCtrl: NavController, public navParams: NavParams, public sharedBasket: SharedBasket,
				private alertCtrl: AlertController, public popoverCtrl: PopoverController, private session: SessionInfos) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProductPage');
	}


	modifyProduct(event) {
		if (this.quantity != '0') {
			this.sharedBasket.addToBasket(this.product, this.quantity);
			this.confirmAddition();
		}
	}

	confirmAddition() {
		let alert = this.alertCtrl.create({
			title: 'Confirmation',
			message: this.quantity + " ".concat(this.product.name.concat(' ajouté au panier !')),
			buttons: [
				{
					text: 'OK',
					handler: () => {
						this.navCtrl.pop();
					}
				}]
		});
		alert.present();
	}

	addToWishlist() {
		if (this.quantity == '0') {
			return;
		}

		let alert = this.alertCtrl.create();
		alert.setTitle('Choix de la liste');

		let wishlists = this.session.getWishLists();
		if (wishlists.length == 0) {
			alert.setSubTitle("Désolé, vous n'avez aucune liste de courses pour le moment. Pour en créer une," +
				"allez dans l'onglet correspondant depuis le menu principal.");
			alert.addButton("J'ai compris");
		}
		else {
			for (let i = 0; i < wishlists.length; i++) {
				alert.addInput({
					type: 'radio',
					label: wishlists[i].name,
					value: i.toString(),
					checked: false
				});
			}
			alert.addButton('Annuler');
			alert.addButton({
				text: 'Ajouter',
				handler: data => {
					if (data != null) {
						this.session.addProductToList(parseInt(data), this.product, parseInt(this.quantity));
					}
				}
			});
		}
		alert.present();
	}
}
