import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import "rxjs/add/operator/debounceTime";
import {Product, ProductCategory} from "@models/products";
import {ApiConnectorService} from "@services/api-connector";
import {ProductPage} from "../product/product";


@IonicPage()
@Component({
	selector: 'page-productByCategory',
	templateUrl: 'productByCategory.html'
})
export class ProductByCategoryPage {

	categorie_vue: ProductCategory = this.navParams.get('name');
	produitsCategorises: Product[];


	constructor(public navCtrl: NavController, public navParams: NavParams, public apiConnector: ApiConnectorService) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProductByCategoriePage');
		this.apiConnector.getProductsList({"category": this.categorie_vue.id}).subscribe(products => {
			this.produitsCategorises = products;
		});
	}

	SelectionProduit(event, produit) {
		this.navCtrl.push(ProductPage, {name: produit});
	}

}
