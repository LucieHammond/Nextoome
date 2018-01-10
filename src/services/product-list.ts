import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Product } from '../models/products'
import { ApiConnectorService } from '../services/api-connector'

@Injectable()
export class ProductList {

    tousProduits: Product[];

    constructor(public http: Http, private apiConnector: ApiConnectorService) {

        this.tousProduits = apiConnector.getProductsList();

    }

    filterItems(searchTerm){

        return this.tousProduits.filter((produit) => {
            return produit.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });

    }

}
