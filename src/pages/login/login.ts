import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HomePage} from '../home/home';
import { Events } from 'ionic-angular';


@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	authForm: FormGroup;

	constructor(public nav: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public events: Events) {
		this.authForm = this.formBuilder.group({
			username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9_.]*'), Validators.minLength(6), Validators.maxLength(30)])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

	onSubmit(): void {
	  	if(this.authForm.valid) {

	  		// TODELETE
			let data = '{"id":16,"date_created":"2018-03-15T14:01:02","date_created_gmt":"2018-03-15T13:01:02","date_modified":"2018-03-15T15:01:02","date_modified_gmt":"2018-03-15T14:01:02","email":"bastian@example.fr","first_name":"Bastian","last_name":"Masson","role":"customer","username":"Bastian","billing":{"first_name":"Bastian","last_name":"Masson","company":"","address_1":"","address_2":"","city":"Lagny-sur-Marne","state":"","postcode":"77400","country":"FR","email":"bastian@example.fr","phone":""},"shipping":{"first_name":"Bastian","last_name":"Masson","company":"","address_1":"","address_2":"","city":"Lagny-sur-Marne","state":"","postcode":"77400","country":"FR"},"is_paying_customer":false,"orders_count":0,"total_spent":"0.00","avatar_url":"https://secure.gravatar.com/avatar/167c6e1fd8126a6f48eea47992c22cce?s=96&d=mm&r=g","meta_data":[{"id":502,"key":"mailchimp_woocommerce_is_subscribed","value":""}],"_links":{"self":[{"href":"https://lagny.nextoome.fr/wp-json/wc/v2/customers/16"}],"collection":[{"href":"https://lagny.nextoome.fr/wp-json/wc/v2/customers"}]}}';

			window.localStorage.setItem('user', "16");
			this.events.publish('user:defined', JSON.parse(data));
		  	this.nav.setRoot(HomePage);
	  	}
	}
}
