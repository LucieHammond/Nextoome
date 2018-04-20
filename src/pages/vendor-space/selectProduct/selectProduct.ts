import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {Product} from "@models/products";
import {ApiConnectorService} from "@services/api-connector";
import {ModifyProductPage} from "../modifyProduct/modifyProduct";
import {DeleteProductPage} from "../deleteProduct/deleteProduct";
import {UnavailableProductPage} from "../unavailableProduct/unavailableProduct";
import {SalesProductPage} from "../salesProduct/salesProduct";


@IonicPage()
@Component({
	selector: 'page-selectProduct',
	templateUrl: 'selectProduct.html',
})
export class SelectProductPage {

	TousProduits: Product[];
	actionChoisie: string = this.navParams.get('action');

	constructor(public navCtrl: NavController, public navParams: NavParams, private apiConnector: ApiConnectorService) {
	}

	//TODO : modifier pour n'afficher que les produits du commercant loggé

	ionViewDidLoad() {
		console.log('ionViewDidLoad SelectProductPage');
		this.apiConnector.getProductsList().subscribe(products => {
			this.TousProduits = products;
		});
	}

	SelectionProduit(event, produit) {
		if (this.actionChoisie == "modify") {
			this.navCtrl.push(ModifyProductPage, {name: produit});
		}
		if (this.actionChoisie == "unavailable") {
			this.navCtrl.push(UnavailableProductPage, {name: produit});
		}
		if (this.actionChoisie == "delete") {
			this.navCtrl.push(DeleteProductPage, {name: produit});
		}
		if (this.actionChoisie == "sales") {
			this.navCtrl.push(SalesProductPage, {name: produit});
		}
	}

	doRefresh(event) {
		this.apiConnector.getProductsList().subscribe(products => {
			this.TousProduits = products;
			event.complete();
		});
	}
}
