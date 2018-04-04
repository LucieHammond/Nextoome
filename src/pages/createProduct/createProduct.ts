import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IonicPage, NavController, PopoverController, AlertController} from 'ionic-angular';
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
	categorie: {
		id: number
	};
	categorieChoisie: ProductCategory;



	constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public apiConnector: ApiConnectorService, 	private alertCtrl: AlertController)
	{
		this.apiConnector.getProductCategoriesList().subscribe(categories => {
			this.toutesCategories = categories;
		});
  }

	ionViewDidLoad() {
		console.log('ionViewDidLoad CreateProductPage');
	}

	createProduct(event) {
		console.log(this.categorieChoisie.id)
		let productData = {
			name: this.name,
			description: this.description,
			regular_price: this.price,
			in_stock: true,
		//	categories: this.categorieChoisie.id,
		};

		this.apiConnector.createProduct(productData);
		this.ConfirmationCreation();
	}

	ConfirmationCreation(){
	let alert = this.alertCtrl.create({
	title: 'Confirmation',
	message: this.name+" ajouté au catalogue !",
	buttons: [
			{text:'OK',
		handler: () => {this.navCtrl.pop();}
		}]
	});
	alert.present();
	}
}
