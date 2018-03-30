import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { Events } from 'ionic-angular';
import * as $ from 'jquery';
import { ApiConnectorService } from "../../services/api-connector";


@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	authForm: FormGroup;

	constructor(public nav: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
				public events: Events, private apiConnector: ApiConnectorService, public loadingCtrl: LoadingController,
				public toastCtrl: ToastController) {
		this.authForm = this.formBuilder.group({
			username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9_.]*'), Validators.minLength(6), Validators.maxLength(30)])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

	onSubmit(): void {

		let loading = this.loadingCtrl.create({
			spinner: 'bubbles'
		});

		loading.present().then(() => {
			let authData = this.authForm.value;
			this.apiConnector.login(authData.username, authData.password).subscribe((data) => {

				window.localStorage.setItem('token', data.token);
				this.apiConnector.getAccountInfo().subscribe((user) => {

					window.localStorage.setItem('user', user.id.toString());
					this.events.publish('user:defined');
					loading.dismiss();
					this.nav.setRoot(HomePage);

				}, (error) => {
					loading.dismiss();
					this.displayMessage(error);
				});
			}, (error) => {
				loading.dismiss();
				this.displayMessage(error);
			});
		});
	}

	displayMessage(error): void {
		let message = JSON.parse(error).message;

		// Unable to sign up
		let toast = this.toastCtrl.create({
			message: $('<div>').html(message).text(),
			duration: 3000,
			position: 'top'
		});
		toast.present();
	}
}
