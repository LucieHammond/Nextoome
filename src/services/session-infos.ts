import { Injectable } from '@angular/core';
import { User } from '../models/users';
import {ApiConnectorService} from "./api-connector";
import {Observable} from "rxjs";
import {Product} from "../models/products";


@Injectable()
export class SessionInfos {

	currentUser: Observable<User> = null;
	wishLists: Product[][] = null;

    constructor(private apiConnector: ApiConnectorService) {
    }

    getCurrentUser(): Observable<User> {
    	if (this.currentUser === null){
    		let userid = Number.parseInt(window.localStorage.getItem('user'));
			this.currentUser = this.apiConnector.getUser(userid);
		}
		return this.currentUser;
	}

	updateCurrentUser(user: User): Observable<User> {
    	let id = user.id;
    	let filteredKeys = ["email", "first_name", "last_name", "billing", "shipping"];
    	let userData = {};
    	filteredKeys.forEach(function(key){ userData[key] = user[key]; });

    	this.currentUser = this.apiConnector.updateUser(id, userData);
		return this.currentUser;
	}

	closeSession() {
    	this.currentUser = null;
	}

	getWishLists(): {name: string, products: Product[]}[] {
    	if (this.wishLists === null){
			let wishLists = window.localStorage.getItem('wishlists');
			this.wishLists = (wishLists === null) ? [] : JSON.parse(wishLists);
		}
		return this.wishLists;
	}
}
