import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, AlertController} from "ionic-angular";
import {Product} from "@models/products";
import {ApiConnectorService} from "@services/api-connector";


@IonicPage()
@Component({
	selector: 'page-deleteProduct',
	templateUrl: 'deleteProduct.html',
})


export class DeleteProductPage {

	produit_vu: Product = this.navParams.get('name');

	constructor(public navCtrl: NavController, public navParams: NavParams,
				private alertCtrl: AlertController, private apiConnector: ApiConnectorService) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DeleteProductPage');
	}

	SupprimerProduit(event) {
		let alert = this.alertCtrl.create({
			title: 'Confirmation',
			message: "Voulez-vous vraiment supprimer définitivement " + this.produit_vu.name + " du catalogue !",
			buttons: [
				{
					text: "Annuler",
					role: 'cancel',
					handler: () => {
					}
				},
				{
					text: 'Valider',
					handler: () => {
						this.apiConnector.deleteProduct(this.produit_vu.id);
						this.navCtrl.pop();
					}
				}]
		});
		alert.present();
	}
}
