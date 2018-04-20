import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {Product} from "@models/products";
import {ProductList} from "@services/product-list";
import {ProductPage} from "../product/product";


@IonicPage()
@Component({
	selector: 'page-flash-sale',
	templateUrl: 'flash-sale.html',
})
export class FlashSalePage {

	flash_sales: Product[];

	constructor(public navCtrl: NavController, public navParams: NavParams, public listProduits: ProductList,) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FlashSalePage');
		this.listProduits.getProducts().subscribe(produits => {
			this.flash_sales = produits.filter((produit) => {
				return produit.on_sale;
			});
		});
	}

	SelectionProduit(event, produit) {
		this.navCtrl.push(ProductPage, {name: produit});
	}


}
