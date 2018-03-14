import { Injectable } from '@angular/core';
import { User } from '../models/users';
import {ApiConnectorService} from "./api-connector";
import {Observable} from "rxjs";


@Injectable()
export class SessionInfos {

	currentUser: Observable<User> = null;

    constructor(private apiConnector: ApiConnectorService) {
    }

    getCurrentUser(): Observable<User> {
    	if (this.currentUser === null){
			this.currentUser = this.apiConnector.getUser(8);
		}
		return this.currentUser;
	}

	updateCurrentUser(user: User): Observable<User> {
    	let id = user.id;
    	let filteredKeys = ["email", "first_name", "last_name", "billing", "shipping"];
    	let userData = {};
    	filteredKeys.forEach(function(key){ userData[key] = user[key]; });
    	console.log(id, userData);

    	this.currentUser = this.apiConnector.updateUser(id, userData);
		return this.currentUser;
	}
}
