import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HomePage} from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	authForm: FormGroup;

	constructor(public nav: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
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
		  window.localStorage.setItem('user', "8");
		  this.nav.setRoot(HomePage);
	  }
	}
}
