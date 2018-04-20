import {Component} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {IonicPage, NavController, AlertController} from "ionic-angular";
import {ApiConnectorService} from "@services/api-connector";
import {ProductCategory} from "@models/products";


@IonicPage()
@Component({
	selector: 'page-createProduct',
	templateUrl: 'createProduct.html',
})
export class CreateProductPage {

	authForm: FormGroup;
	allCategories: ProductCategory[];
	name: string;
	description: string;
	price: string;
	// TODO : trouver un moyen de choisir la catégorie
	chosenCategory: ProductCategory;


	constructor(public navCtrl: NavController, public apiConnector: ApiConnectorService, private alertCtrl: AlertController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CreateProductPage');
		this.apiConnector.getProductCategoriesList().subscribe(categories => {
			this.allCategories = categories;
		});
	}

	createProduct(event) {
		let productData = {
			name: this.name,
			description: this.description,
			regular_price: this.price,
			in_stock: true,
			//	categories: [{id: this.chosenCategory.id }],
		};

		this.apiConnector.createProduct(productData);
		this.ConfirmationCreation();
	}

	ConfirmationCreation() {
		let alert = this.alertCtrl.create({
			title: 'Confirmation',
			message: this.name + " ajouté au catalogue !",
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
