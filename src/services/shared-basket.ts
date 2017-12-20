import { Injectable } from '@angular/core';
import { Product } from '../models/products';

@Injectable()
export class SharedBasket {

produit: Product;
contenuPanier: Product[];

    constructor() {
    }

    addToBasket(produit) {
             this.contenuPanier.push(produit);
    }

    removeFromBasket(produit){
      this.contenuPanier.splice(produit);
    }


    getBasket() {
        return this.contenuPanier;
    }
}
