import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, AlertController} from "ionic-angular";
import {ApiConnectorService} from "@services/api-connector";
import {Product, ProductCategory} from "@models/products";


@IonicPage()
@Component({
	selector: 'page-modifyProduct',
	templateUrl: 'modifyProduct.html',
})
export class ModifyProductPage {

	product: Product = this.navParams.get('name');
	name: string = this.navParams.get('name').name;
	description: string = this.product.description;
	price: string = this.product.price;
	allCategories: ProductCategory[];
	category: ProductCategory;
	id: number = this.product.id;


	constructor(public navCtrl: NavController, public navParams: NavParams, public apiConnector: ApiConnectorService, private alertCtrl: AlertController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ModifyProductPage');
		this.apiConnector.getProductCategoriesList().subscribe(categories => {
			this.allCategories = categories;
			this.category = this.allCategories.find((category) => {
				return category.id == this.product.categories[0].id;
			});
		});
	}

	updateProduct(event) {

		let productData = {
			name: this.name,
			description: this.description,
			regular_price: this.price,
			in_stock: true,
			categories: [{
				id: this.category.id,
			}]
		};

		this.apiConnector.updateProduct(this.id, productData);
		this.confirmModification();
	}

	confirmModification() {
		let alert = this.alertCtrl.create({
			title: 'Confirmation',
			message: this.name + " mis à jour !",
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
