import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import {Product, ProductCategory} from "@models/products";
import {ProductList} from "@services/product-list";
import {ApiConnectorService} from "@services/api-connector";
import {ProductByCategoryPage} from "../productByCategory/productByCategory";
import {ProductPage} from "../product/product";


@IonicPage()
@Component({
	selector: 'page-categories',
	templateUrl: 'categories.html'
})
export class CategoriesPage {

	categories: ProductCategory[];
	allProducts: Product[];
	searchTerm: string = '';
	searchControl: FormControl = new FormControl();
	searchResults: any;
	searching: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams, public rechercheData: ProductList, public apiConnector: ApiConnectorService) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CategoriesPage');
		this.apiConnector.getProductCategoriesList().subscribe(categories => {
			this.categories = categories;
		});
		this.rechercheData.getProducts().subscribe(products => {
			this.allProducts = products;
		});
	}

	selectProduct(event, product) {
		this.navCtrl.push(ProductPage, {name: product});
	}

	selectCategory(event, category) {
		this.navCtrl.push(ProductByCategoryPage, {name: category});
	}

	onSearchInput() {
		this.searching = true;
	}

	searchProducts() {

		this.rechercheData.getProducts().subscribe(products => {
			this.searchResults = products.filter((product) => {
				return this.searchTerm && product.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
			});
			this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
				this.searchProducts();
			});
		});
	}
}
