import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProductPage} from '../product/product';
import {Product} from '../../models/products'
import {ProductList} from '../../services/product-list'
import {ProductCategory} from '../../models/products'
import 'rxjs/add/operator/debounceTime';
import {FormControl} from '@angular/forms';
import {ApiConnectorService} from "../../services/api-connector";

@IonicPage()
@Component({
	selector: 'page-productByCategory',
	templateUrl: 'productByCategory.html'
})
export class ProductByCategoryPage {

	categorie_vue:  ProductCategory = this.navParams.get('name');
	produitsCategorises: Product[];


	constructor(public navCtrl: NavController, public navParams: NavParams, public rechercheData: ProductList, public apiConnector: ApiConnectorService) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProductByCategoriePage');
		this.apiConnector.getProductsList({"category": this.categorie_vue.id}).subscribe(products => {
			this.produitsCategorises = products;
			console.log(this.produitsCategorises.length);
		});
	}

	SelectionProduit(event, produit) {
		this.navCtrl.push(ProductPage, {name: produit});
	}

}