import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";
import {Product} from "@models/products";
import {ApiConnectorService} from "./api-connector";


@Injectable()
export class ProductList {

	tousProduits: Observable<Product[]> = null;
	produitsDisponibles: Product[];
	lastRefresh: Date = null;
	refreshStep = 1000 * 60 * 15; // 15 minutes

	constructor(private apiConnector: ApiConnectorService) {
	}

	getProducts() {
		if (this.tousProduits === null || this._data_expired()) {
			this.tousProduits = this.apiConnector.getProductsList();
			this.lastRefresh = new Date();
		}
		return this.tousProduits;
	}

	getAvailableProducts() {
		this.getProducts().subscribe(produits => {
			this.produitsDisponibles = produits.filter((produit) => {
				return produit.in_stock;
			});
		});
		return this.produitsDisponibles;
	}

	// Méthode de cache qui recharge les produits toutes les 15 minutes
	_data_expired() {
		let now = new Date();
		return !this.lastRefresh || now.getTime() - this.lastRefresh.getTime() > this.refreshStep;
	}
}
