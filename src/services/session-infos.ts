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
    	return this.currentUser;
	}

}
