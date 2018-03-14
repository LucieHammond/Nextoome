import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import {Product} from '../models/products'
import {ApiConnectorService} from './api-connector'
import {Observable} from "rxjs";

@Injectable()
export class ProductList {

	tousProduits: Observable<Product[]> = null;
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

	// Méthode de cache un peu sale.
	// TODO: implémenter un vrai cache global
	_data_expired(){
		let now = new Date();
		return this.lastRefresh || now.getTime() - this.lastRefresh.getTime() > this.refreshStep;
	}
}
