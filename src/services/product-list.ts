import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Product} from '../models/products'
import {ApiConnectorService} from './api-connector'
import {Observable} from "rxjs";

@Injectable()
export class ProductList {

	tousProduits: Observable<Product[]>;

	constructor(public http: Http, private apiConnector: ApiConnectorService) {
		this.tousProduits = this.apiConnector.getProductsList()
	}

	getProducts() {
		return this.tousProduits;
		/*return this.tousProduits.subscribe(produits => {
			console.log(typeof produits);
			return produits.filter((produit) => {
				console.log(produit.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
				return produit.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
			});
		});*/
	}

}
