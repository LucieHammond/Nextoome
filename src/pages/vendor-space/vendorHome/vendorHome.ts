import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {CreateProductPage} from "../createProduct/createProduct";
import {SelectProductPage} from "../selectProduct/selectProduct";


@IonicPage()
@Component({
	selector: 'page-vendorHome',
	templateUrl: 'vendorHome.html',
})
export class VendorHomePage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad VendorHomePage');
	}

	createProduct(event) {
		this.navCtrl.push(CreateProductPage);
	}

	modifyProduct(event) {
		this.navCtrl.push(SelectProductPage, {action: "modify"});
	}

	salesProduct(event) {
		this.navCtrl.push(SelectProductPage, {action: "sales"});
	}

	unavailableProduct(event) {
		this.navCtrl.push(SelectProductPage, {action: "unavailable"})
	}

	deleteProduct(event) {
		this.navCtrl.push(SelectProductPage, {action: "delete"});
	}

}
