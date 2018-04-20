import {Injectable} from "@angular/core";
import {Product} from "@models/products";


@Injectable()
export class SharedBasket {

	product: Product;
	basket: Product[] = [];
	names: string[] = [];
	totalPrice: number;
	i: number;

	constructor() {
	}

	addToBasket(selectedProduct, quantite) {
		this.names = [];
		for (let produitDuPanier of this.basket) {
			this.names.push(produitDuPanier.name);
		}
		this.i = this.names.indexOf(selectedProduct.name);
		if (this.i > -1) {
			this.basket[this.i].basket_quantity = this.basket[this.i].basket_quantity * 1 + 1 * Number.parseInt(quantite)
		}
		else {
			this.basket.push(selectedProduct);
			selectedProduct.basket_quantity = quantite
		}
	}

	increase(selectedProduct) {
		selectedProduct.basket_quantity = selectedProduct.basket_quantity * 1 + 1 * 1;
	}

	decrease(selectedProduct) {
		if (selectedProduct.basket_quantity > 1) {
			selectedProduct.basket_quantity -= 1;
		}
		else(this.removeFromBasket(selectedProduct))
	}

	removeFromBasket(product) {
		let index = this.basket.indexOf(product);

		if (index > -1) {
			this.basket.splice(index, 1);
			product.basket_quantity = 0;
		}
	}


	getBasket(): Product[] {
		return this.basket;
	}

	getTotalPrice() {
		this.totalPrice = 0;
		for (let product of this.basket) {
			this.totalPrice = (+product.price * product.basket_quantity) + this.totalPrice;
		}
		return this.totalPrice;
	}

	isEmpty(): boolean {
		return this.basket.length == 0;
	}
}
