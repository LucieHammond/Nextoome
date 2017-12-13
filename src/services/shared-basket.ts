import { Injectable } from '@angular/core';

@Injectable()
export class SharedBasket {

contenuPanier: string[];

    constructor() {
    }

    addToBasket(produit) {
             this.contenuPanier.push();
    }

    getBasket() {
        return this.contenuPanier;
    }
}
