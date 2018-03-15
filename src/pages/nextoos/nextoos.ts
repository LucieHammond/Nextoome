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
		let userdata = {
			email: 'john.doe@example.com',
			first_name: 'Romain',
			last_name: 'Bosq',
			username: 'romain.bosq',
			password: 'password',
			billing: {
				first_name: 'Romain',
				last_name: 'bosq',
				company: '',
				address_1: '969 Market',
				address_2: '',
				city: 'San Francisco',
				state: 'CA',
				postcode: '94103',
				country: 'US',
				email: 'romain.bosq@example.com',
				phone: '(555) 555-5555'
			},
			shipping: {
				first_name: 'Romain',
				last_name: 'Bosq',
				company: '',
				address_1: '969 Market',
				address_2: '',
				city: 'San Francisco',
				state: 'CA',
				postcode: '94103',
				country: 'US'
			}
		};

		this.apiConnector.deleteUser(18).subscribe(data => {
			console.log('data', data);
		});
	}

}
