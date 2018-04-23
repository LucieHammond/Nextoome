import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {FormControl} from "@angular/forms";
import * as $ from "jquery";
import "rxjs/add/operator/debounceTime";
import {Product} from "@models/products";
import {User} from "@models/users";
import {ProductList} from "@services/product-list";
import {SessionInfos} from "@services/session-infos";
import {ProductPage} from "../product/product";
import {VendorHomePage} from "../../vendor-space/vendorHome/vendorHome";


@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	availableProducts: Product[];
	searchTerm: string = '';
	searchControl: FormControl = new FormControl();
	searchResults: any;
	searching: boolean = false;
	user: User;
	isShop: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams, public searchData: ProductList, public productsList: ProductList, private session: SessionInfos) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');

		this.session.getCurrentUser().subscribe(user => {
			this.user = $.extend(true, {}, user);
			this.isShop = (this.user.role == "vendor");
		});
		this.productsList.getProducts().subscribe(products => {
			this.availableProducts = products.filter((product) => {
				return product.in_stock;
			});
		});
	}

	selectProduct(event, product) {
		this.navCtrl.push(ProductPage, {name: product});
	}

	onSearchInput() {
		this.searching = true;
	}

	vendorAccess(event) {
		this.navCtrl.push(VendorHomePage);
	}

	searchProducts() {
		this.searchData.getProducts().subscribe(products => {
			this.searchResults = products.filter((product) => {
				return this.searchTerm && product.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
			});
			this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
				this.searchProducts();
			});
		});
	}

	doRefresh(event) {
		this.productsList.getProducts(true).subscribe(products => {
			this.availableProducts = products.filter((product) => {
				return product.in_stock;
			});
			this.searchTerm = '';
			this.searchResults = null;
			event.complete();
		});
	}
}
