import { Injectable } from '@angular/core';
import { Product } from '../models/products';


@Injectable()
export class SharedBasket {

	produit: Product;
	contenuPanier: Product[] = [];
	totalPrice : number ;

	constructor() {}

    addToBasket(produitSelectionne,quantite) {
		if(produitSelectionne.quantite_panier>0)
		  	{produitSelectionne.quantite_panier = produitSelectionne.quantite_panier*1 + 1*Number.parseInt(quantite)}
		else{
		  	this.contenuPanier.push(produitSelectionne)
		  	produitSelectionne.quantite_panier = quantite}
    }

    removeFromBasket(produitASupprimer){
      	let index = this.contenuPanier.indexOf(produitASupprimer);

    	if(index > -1){
      		this.contenuPanier.splice(index, 1);
      		produitASupprimer.quantite_panier = 0;
    	}
    }


    getBasket() {
        return this.contenuPanier;
    }

    getTotalPrice(){
      	this.totalPrice = 0;
      	for(let produitDuPanier of this.contenuPanier)
      	{
        	this.totalPrice = (+produitDuPanier.price*produitDuPanier.quantite_panier)+this.totalPrice;
      	}
        return this.totalPrice;
    }
}
