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
	}
}
