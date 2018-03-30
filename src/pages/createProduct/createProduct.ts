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

	/*produit: {name: string, type: string, status: string, description: string, price: string, in_stock: boolean,
		categories: {id: number, name: string, slug: string	}
	};*/

	constructor(public navCtrl: NavController, public toastCtrl: ToastController, public formBuilder: FormBuilder, public apiConnector: ApiConnectorService)
	{

/*		this.authForm = this.formBuilder.group({
			name: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
			description: ['', Validators.compose([Validators.required, Validators.maxLength(500)])],
		});*/
		this.apiConnector.getProductCategoriesList().subscribe(categories => {
			this.toutesCategories = categories;
		});
  }

	createProduct(event) {

//		this.produit = $.extend(this.produit, this.authForm.value);

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
