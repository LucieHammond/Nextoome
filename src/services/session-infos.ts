import { Injectable } from '@angular/core';
import { User } from '../models/users';
import {ApiConnectorService} from "./api-connector";

@Injectable()
export class SessionInfos {

	currentUser: User;

    constructor(private apiConnector: ApiConnectorService) {
    	this.currentUser = apiConnector.getUser(1);
    }

    getCurrentUser(): User {
    	return Object.assign({}, this.currentUser);
	}

	updateCurrentUser(user: User): User {
    	let id = this.currentUser.id;
    	let filteredKeys = ["email", "first_name", "last_name", "username", "billing_address", "shipping_address"];
    	let userData = {};
    	filteredKeys.forEach(function(key){ userData[key] = user[key]; });
    	console.log(userData);

    	this.currentUser = this.apiConnector.updateUser(id, userData);
		return user;
	}
}
