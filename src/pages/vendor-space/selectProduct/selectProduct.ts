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

	allProducts: Product[];
	action: string = this.navParams.get('action');

	constructor(public navCtrl: NavController, public navParams: NavParams, private apiConnector: ApiConnectorService) {
	}

	// TODO : Modifier pour n'afficher que les produits du commercant loggé
	// Actuellement le fitrage sur ce critère est impossible car les produits ne sont pas associés à un commerçant

	ionViewDidLoad() {
		console.log('ionViewDidLoad SelectProductPage');
		this.apiConnector.getProductsList().subscribe(products => {
			this.allProducts = products;
		});
	}

	selectProduct(event, produit) {
		if (this.action == "modify") {
			this.navCtrl.push(ModifyProductPage, {name: produit});
		}
		if (this.action == "unavailable") {
			this.navCtrl.push(UnavailableProductPage, {name: produit});
		}
		if (this.action == "delete") {
			this.navCtrl.push(DeleteProductPage, {name: produit});
		}
		if (this.action == "sales") {
			this.navCtrl.push(SalesProductPage, {name: produit});
		}
	}

	doRefresh(event) {
		this.apiConnector.getProductsList(true).subscribe(products => {
			this.allProducts = products;
			event.complete();
		});
	}
}
