import {Injectable} from "@angular/core";
import {User} from "../models/users";
import {ApiConnectorService} from "./api-connector";
import {Observable} from "rxjs";
import {Events} from "ionic-angular";
import {Product, WishlistItem} from "../models/products";


@Injectable()
export class SessionInfos {

	currentUser: Observable<User> = null;
	wishLists: {name: string, products: WishlistItem[]}[] = null;

	constructor(private apiConnector: ApiConnectorService, public events: Events) {
	}

	getCurrentUser(): Observable<User> {
		if (this.currentUser === null) {
			let userid = Number.parseInt(window.localStorage.getItem('user'));
			this.currentUser = this.apiConnector.getUser(userid);
		}
		return this.currentUser;
	}

	updateCurrentUser(user: User): Observable<User> {
		let id = user.id;
		let filteredKeys = ["email", "first_name", "last_name", "billing", "shipping", "avatar_url"];
		let userData = {};
		filteredKeys.forEach(function (key) {
			userData[key] = user[key];
		});

		this.currentUser = this.apiConnector.updateUser(id, userData);

		this.events.publish('user:defined');
		return this.currentUser;
	}

	updateUserSettings(metadata): Observable<User> {
		let userid = Number.parseInt(window.localStorage.getItem('user'));
		this.currentUser = this.apiConnector.updateUser(userid, {meta_data: metadata});
		return this.currentUser;
	}

	closeSession() {
		this.currentUser = null;
	}

	getWishLists(): {name: string, products: WishlistItem[]}[] {
		if (this.wishLists === null) {
			let wishLists = window.localStorage.getItem('wishlists');
			this.wishLists = (wishLists == null) ? [] : JSON.parse(wishLists);
		}
		return this.wishLists;
	}

	addProductToList(listIndex: number, product: Product, quantity: number) {
		let sameProduct: WishlistItem = this.wishLists[listIndex].products.find((prod) => {
			return prod.id == product.id;
		});
		if (sameProduct) {
			sameProduct.quantity += quantity;
		}
		else {
			let newProduct: WishlistItem = {
				id: product.id,
				name: product.name,
				image: product.images[0].src,
				quantity: quantity
			};
			this.wishLists[listIndex].products.push(newProduct);
		}
		window.localStorage.setItem('wishlists', JSON.stringify(this.wishLists));
	}
}
