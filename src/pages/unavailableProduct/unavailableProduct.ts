import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, AlertController} from "ionic-angular";
import {Product} from "../../models/products";
import {ApiConnectorService} from "../../services/api-connector";


@IonicPage()
@Component({
	selector: 'page-unavailableProduct',
	templateUrl: 'unavailableProduct.html',
})


export class UnavailableProductPage {

	produit_vu: Product = this.navParams.get('name');
	enlever: boolean = this.produit_vu.in_stock;
	remettre: boolean = !this.produit_vu.in_stock;

	constructor(public navCtrl: NavController, public navParams: NavParams,
				private alertCtrl: AlertController, private apiConnector: ApiConnectorService) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad UnavailableProductPage');
	}


	RendreIndisponibleProduit(event) {
		this.apiConnector.updateProduct(this.produit_vu.id, {in_stock: false});
		this.ConfirmationIndispo();
	}

	RendreDisponibleProduit(event) {
		this.apiConnector.updateProduct(this.produit_vu.id, {in_stock: true});
		this.ConfirmationDispo();
	}

	ConfirmationIndispo() {
		let alert = this.alertCtrl.create({
			title: 'Confirmation',
			message: this.produit_vu.name + " rendu indisponible !",
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

	ConfirmationDispo() {
		let alert = this.alertCtrl.create({
			title: 'Confirmation',
			message: this.produit_vu.name + " remis en vente !",
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
