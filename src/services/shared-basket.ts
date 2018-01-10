import { Injectable } from '@angular/core';
import { Product } from '../models/products';



@Injectable()
export class SharedBasket {

produit: Product;
contenuPanier: Product[] ;

  constructor() {

this.contenuPanier = [];

    }

    addToBasket(produitSelectionne) {
             this.contenuPanier.push(produitSelectionne);
    }

    removeFromBasket(produitASupprimer){
      let index = this.contenuPanier.indexOf(produitASupprimer);

    if(index > -1){
      this.contenuPanier.splice(index, 1);
    }
    }


    getBasket() {
        return this.contenuPanier;
    }
}
