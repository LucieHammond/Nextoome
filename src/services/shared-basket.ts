import { Injectable } from '@angular/core';
import { Product } from '../models/products';



@Injectable()
export class SharedBasket {

produit: Product;
contenuPanier: Product[] ;
totalPrice : number ;

  constructor() {

this.contenuPanier = [];

    }

    addToBasket(produitSelectionne,quantite) {
            if(produitSelectionne.menu_order!=0)
              {produitSelectionne.menu_order = produitSelectionne.menu_order + quantite}
            else{
              this.contenuPanier.push(produitSelectionne)
              produitSelectionne.menu_order = produitSelectionne.menu_order + quantite}

    }

    removeFromBasket(produitASupprimer){
      let index = this.contenuPanier.indexOf(produitASupprimer);

    if(index > -1){
      this.contenuPanier.splice(index, 1);
      produitASupprimer.menu_order = 0;
    }
    }


    getBasket() {
        return this.contenuPanier;
    }

    getTotalPrice(){
      this.totalPrice = 0;
      for(let produitDuPanier of this.contenuPanier)
      {
        this.totalPrice = (+produitDuPanier.price*produitDuPanier.menu_order)+this.totalPrice;
      }
        return this.totalPrice;
      }
    }
