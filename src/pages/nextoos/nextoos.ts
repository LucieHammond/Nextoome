import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ApiConnectorService} from "../../services/api-connector";


@IonicPage()
@Component({
	selector: 'page-nextoos',
	templateUrl: 'nextoos.html',
})
export class NextoosPage {
	model;
	keys: string[] = [];

	// Test for API service
	constructor(public navCtrl: NavController, public navParams: NavParams, private apiConnector: ApiConnectorService) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad NextoosPage');
		this.apiConnector.getProduct(379).subscribe(product => {
			this.model = product;
			this.keys = Object.keys(this.model);
		});
	}

}
