import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import {ApiConnectorService} from '../../services/api-connector'
import {Product} from '../../models/products'
import {ProductCategory} from '../../models/products'


@IonicPage()
@Component({
	selector: 'page-createProduct',
	templateUrl: 'createProduct.html',
})
export class CreateProductPage {

	authForm: FormGroup;
	toutesCategories: ProductCategory[];
	name: string;
	description: string;
	price: string;
	categorie: string;


	constructor(public navCtrl: NavController, public toastCtrl: ToastController, public formBuilder: FormBuilder, public apiConnector: ApiConnectorService)
	{
		this.apiConnector.getProductCategoriesList().subscribe(categories => {
			this.toutesCategories = categories;
		});
  }

	ionViewDidLoad() {
		console.log('ionViewDidLoad CreateProductPage');
	}

	createProduct(event) {

		let productData = {
			name: this.name,
			description: this.description,
			price: this.price,
			in_stock: true,
			categories: {
				id: '',
				name: this.categorie,
				slug: ''
			},
		};

		this.apiConnector.createProduct(productData);

}
}
