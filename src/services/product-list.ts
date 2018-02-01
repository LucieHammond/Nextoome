import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Product } from '../models/products'
import { ApiConnectorService } from './api-connector'
import {Observable} from "rxjs";

@Injectable()
export class ProductList {

    tousProduits: Observable<Product[]>;

    constructor(public http: Http, private apiConnector: ApiConnectorService) {
		this.tousProduits = this.apiConnector.getProductsList();
    }

    filterItems(searchTerm){
		this.tousProduits.subscribe(listeProduits => {
			return listeProduits.filter((produit) => {
				return produit.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
			});
		});
    }

}
