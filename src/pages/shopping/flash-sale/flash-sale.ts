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

	constructor(public navCtrl: NavController, public navParams: NavParams, public productsList: ProductList,) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FlashSalePage');
		this.productsList.getProducts().subscribe(products => {
			this.flash_sales = products.filter((product) => {
				return product.on_sale;
			});
		});
	}

	selectProduct(event, product) {
		this.navCtrl.push(ProductPage, {name: product});
	}


}
