import {Injectable} from "@angular/core";
import {Product} from "@models/products";


@Injectable()
export class SharedBasket {

	produit: Product;
	contenuPanier: Product[] = [];
	listeNoms: string[] = [];
	totalPrice: number;
	i: number;

	constructor() {
	}

	addToBasket(produitSelectionne, quantite) {
		this.listeNoms = [];
		for (let produitDuPanier of this.contenuPanier) {
			this.listeNoms.push(produitDuPanier.name);
		}
		this.i = this.listeNoms.indexOf(produitSelectionne.name);
		if (this.i > -1) {
			this.contenuPanier[this.i].quantite_panier = this.contenuPanier[this.i].quantite_panier * 1 + 1 * Number.parseInt(quantite)
		}
		else {
			this.contenuPanier.push(produitSelectionne);
			produitSelectionne.quantite_panier = quantite
		}
	}

	increase(produitSelectionne) {
		produitSelectionne.quantite_panier = produitSelectionne.quantite_panier * 1 + 1 * 1;
	}

	decrease(produitSelectionne) {
		if (produitSelectionne.quantite_panier > 1) {
			produitSelectionne.quantite_panier -= 1;
		}
		else(this.removeFromBasket(produitSelectionne))
	}

	removeFromBasket(produitASupprimer) {
		let index = this.contenuPanier.indexOf(produitASupprimer);

		if (index > -1) {
			this.contenuPanier.splice(index, 1);
			produitASupprimer.quantite_panier = 0;
		}
	}


	getBasket(): Product[] {
		return this.contenuPanier;
	}

	getTotalPrice() {
		this.totalPrice = 0;
		for (let produitDuPanier of this.contenuPanier) {
			this.totalPrice = (+produitDuPanier.price * produitDuPanier.quantite_panier) + this.totalPrice;
		}
		return this.totalPrice;
	}

	isEmpty(): boolean {
		return this.contenuPanier.length == 0;
	}
}
