import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, AlertController} from "ionic-angular";
import {Product} from "@models/products";
import {ApiConnectorService} from "@services/api-connector";


@IonicPage()
@Component({
	selector: 'page-unavailableProduct',
	templateUrl: 'unavailableProduct.html',
})


export class UnavailableProductPage {

	product: Product = this.navParams.get('name');
	available: boolean = this.product.in_stock;

	constructor(public navCtrl: NavController, public navParams: NavParams,
				private alertCtrl: AlertController, private apiConnector: ApiConnectorService) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad UnavailableProductPage');
	}


	setUnavailable(event) {
		this.apiConnector.updateProduct(this.product.id, {in_stock: false});
		this.confirmNotAvailable();
	}

	setAvailable(event) {
		this.apiConnector.updateProduct(this.product.id, {in_stock: true});
		this.ConfirmAvailable();
	}

	confirmNotAvailable() {
		let alert = this.alertCtrl.create({
			title: 'Confirmation',
			message: this.product.name + " rendu indisponible !",
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

	ConfirmAvailable() {
		let alert = this.alertCtrl.create({
			title: 'Confirmation',
			message: this.product.name + " remis en vente !",
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
}
