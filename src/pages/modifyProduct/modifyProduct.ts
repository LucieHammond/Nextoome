import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
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


	constructor(public navCtrl: NavController, public navParams: NavParams, public apiConnector: ApiConnectorService)
	{
  }

	ionViewDidLoad() {
		console.log('ionViewDidLoad ModifyProductPage');
	}

	updateProduct(event) {

		let productData = {
			name: this.name,
			description: this.description,
			price: this.price,
			in_stock: true,
			categories: {
				name: this.categorie,
			},
		};

		this.apiConnector.updateProduct(this.id,productData);

}
}
