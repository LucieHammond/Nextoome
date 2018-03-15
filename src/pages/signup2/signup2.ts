import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, LoadingController} from 'ionic-angular';
import {ApiConnectorService} from "../../services/api-connector";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Cities } from '../../config';
import * as $ from 'jquery';
import {HomePage} from '../home/home';
import { Events } from 'ionic-angular';


@IonicPage()
@Component({
	selector: 'page-signup2',
	templateUrl: 'signup2.html',
})
export class Signup2Page {

	account: {first_name: string, last_name: string, email: string, phone: string, username: string, password: string,
		city: {name: string, code: string, id: string}} =
		{first_name: "", last_name:"", email:"", phone:"", username: "", password: "", city: {name: '', code: '', id: ''}};
	authForm: FormGroup;
	cities: {name: string, code: string, id: string}[] = Cities;

	constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
				public formBuilder: FormBuilder, private apiConnector: ApiConnectorService, public events: Events,
				public loadingCtrl: LoadingController)
	{
		this.account = $.extend(this.account, navParams.get('account'));
		this.authForm = this.formBuilder.group({
			city: ['', Validators.required],
			username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9_.]*'), Validators.minLength(6), Validators.maxLength(30)])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
			accept: [false, Validators.requiredTrue]
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Signup2Page');
	}

	signUp() {

		this.account = $.extend(this.account, this.authForm.value);

		let userData = {
			email: this.account.email,
			first_name: this.account.first_name,
			last_name: this.account.last_name,
			username: this.account.username,
			password: this.account.password,
			billing: {
				first_name: this.account.first_name,
				last_name: this.account.last_name,
				company: '',
				address_1: '',
				address_2: '',
				city: this.account.city.name,
				state: '',
				postcode: this.account.city.code,
				country: 'FR',
				email: this.account.email,
				phone: this.account.phone
			},
			shipping: {
				first_name: this.account.first_name,
				last_name: this.account.last_name,
				company: '',
				address_1: '',
				address_2: '',
				city: this.account.city.name,
				state: '',
				postcode: this.account.city.code,
				country: 'FR'
			}
		};

		this.apiConnector.createUser(userData).subscribe((user) => {

			window.localStorage.setItem('user', user.id.toString());
			this.events.publish('user:defined', user);
			this.navCtrl.setRoot(HomePage);

		}, (error) => {

			let message = JSON.parse(error).message;

			// Unable to sign up
			let toast = this.toastCtrl.create({
				message: $('<div>').html(message).text(),
				duration: 3000,
				position: 'top'
			});
			toast.present();
		});
	}

	launchConnection() {
		let loading = this.loadingCtrl.create({
			spinner: 'bubbles'
		});

		loading.present().then(() => {
			this.signUp();
			loading.dismiss();
		});
	}

}
