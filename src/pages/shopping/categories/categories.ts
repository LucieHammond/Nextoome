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
	tousProduits: Product[];
	searchTerm: string = '';
	searchControl: FormControl = new FormControl();
	resultatsRecherche: any;
	searching: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams, public rechercheData: ProductList, public apiConnector: ApiConnectorService) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CategoriesPage');
		this.apiConnector.getProductCategoriesList().subscribe(categories => {
			this.categories = categories;
		});
		this.rechercheData.getProducts().subscribe(products => {
			this.tousProduits = products;
		});
	}

	SelectionProduit(event, produit) {
		this.navCtrl.push(ProductPage, {name: produit});
	}

	SelectionCategories(event, category) {
		this.navCtrl.push(ProductByCategoryPage, {name: category});
	}

	onSearchInput() {
		this.searching = true;
	}

	RechercheProduits() {

		this.rechercheData.getProducts().subscribe(produits => {
			this.resultatsRecherche = produits.filter((produit) => {
				return produit.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
			});
			this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
				this.RechercheProduits();
			});
		});
	}
}
