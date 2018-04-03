import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {ApiConnectorService} from '../../services/api-connector'
import {Product} from '../../models/products'
import {ProductCategory} from '../../models/products'


@IonicPage()
@Component({
	selector: 'page-modifyProduct',
	templateUrl: 'modifyProduct.html',
})
export class ModifyProductPage {

	produitVu: Product = this.navParams.get('name');
	name: string = this.navParams.get('name').name;
	description: string = this.produitVu.description;
	price: string = this.produitVu.price;
	categorie: string = this.produitVu.categories[0].name;
	id: number= this.produitVu.id;


	constructor(public navCtrl: NavController, public navParams: NavParams, public apiConnector: ApiConnectorService, private alertCtrl: AlertController)
	{
  }

	ionViewDidLoad() {
		console.log('ionViewDidLoad ModifyProductPage');
	}

	updateProduct(event) {

		let productData = {
			name: this.name,
			description: this.description,
			regular_price: this.price,
			in_stock: true,
		/*	categories: {
				name: this.categorie,
			},*/
		};

		this.apiConnector.updateProduct(this.id,productData);
		this.ConfirmationModification();
}

ConfirmationModification(){
let alert = this.alertCtrl.create({
	title: 'Confirmation',
	message: this.name+" mis à jour !",
	buttons: [
			{text:'OK',
		handler: () => {this.navCtrl.pop();}
		}]
});
alert.present();
}
}
