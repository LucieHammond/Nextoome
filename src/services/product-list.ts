import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";
import {Product} from "@models/products";
import {ApiConnectorService} from "./api-connector";


@Injectable()
export class ProductList {

	allProducts: Observable<Product[]> = null;
	availableProducts: Product[];
	lastRefresh: Date = null;
	refreshStep = 1000 * 60 * 15; // 15 minutes

	constructor(private apiConnector: ApiConnectorService) {
	}

	getProducts(refresh = false) {
		if (this.allProducts === null || this._data_expired() || refresh) {
			this.allProducts = this.apiConnector.getProductsList();
			this.lastRefresh = new Date();
		}
		return this.allProducts;
	}

	getAvailableProducts() {
		this.getProducts().subscribe(products => {
			this.availableProducts = products.filter((produit) => {
				return produit.in_stock;
			});
		});
		return this.availableProducts;
	}

	// Méthode de cache (artisanale) qui recharge les produits toutes les 15 minutes
	_data_expired() {
		let now = new Date();
		return !this.lastRefresh || now.getTime() - this.lastRefresh.getTime() > this.refreshStep;
	}
}
