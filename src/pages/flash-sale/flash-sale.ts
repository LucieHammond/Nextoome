import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProductPage} from '../product/product';
import {Product} from '../../models/products'
import {ProductList} from '../../services/product-list'
import {ApiConnectorService} from '../../services/api-connector'

@IonicPage()
@Component({
	selector: 'page-flash-sale',
	templateUrl: 'flash-sale.html',
})
export class FlashSalePage {

	flash_sales: Product[];

	constructor(public navCtrl: NavController, public navParams: NavParams, private apiConnector: ApiConnectorService, public listProduits: ProductList,) {
		this.listProduits.getProducts().subscribe(produits =>{
			this.flash_sales = produits.filter((produit) => {
				return produit.on_sale;
			});
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FlashSalePage');
	}

	SelectionProduit(event, produit) {
		this.navCtrl.push(ProductPage, {name: produit});
	}


}
