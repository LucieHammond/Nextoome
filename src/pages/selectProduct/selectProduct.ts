import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProductPage} from '../product/product';
import {Product} from '../../models/products'
import {ProductList} from '../../services/product-list'
import {ApiConnectorService} from '../../services/api-connector'
import{ModifyProductPage} from '../modifyProduct/modifyProduct'
import {DeleteProductPage} from '../deleteProduct/deleteProduct'
import {UnavailableProductPage} from '../unavailableProduct/unavailableProduct'


@IonicPage()
@Component({
	selector: 'page-selectProduct',
	templateUrl: 'selectProduct.html',
})
export class SelectProductPage {

	TousProduits: Product[];
	actionChoisie: string = this.navParams.get('action');

	constructor(public navCtrl: NavController, public navParams: NavParams, private apiConnector: ApiConnectorService) {
		this.apiConnector.getProductsList().subscribe(products => {
			this.TousProduits = products;
		});
	}
//TODO : modifier pour n'afficher que les produits du commercant loggé

	ionViewDidLoad() {
		console.log('ionViewDidLoad SelectProductPage');
	}

	SelectionProduit(event, produit) {
		if(this.actionChoisie=="modify"){
			this.navCtrl.push(ModifyProductPage, {name: produit});
		}
		if(this.actionChoisie=="unavailable"){
			this.navCtrl.push(UnavailableProductPage, {name: produit});
		}
		if(this.actionChoisie=="delete"){
			this.navCtrl.push(DeleteProductPage, {name: produit});
		}
	}

doRefresh(event){
	this.apiConnector.getProductsList().subscribe(products => {
		this.TousProduits = products;
	});
}

}
