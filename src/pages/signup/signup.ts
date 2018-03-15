import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IonicPage, NavController, ToastController} from 'ionic-angular';


@IonicPage()
@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html',
})
export class SignupPage {

	authForm: FormGroup;

	constructor(public navCtrl: NavController, public toastCtrl: ToastController, public formBuilder: FormBuilder)
	{

		this.authForm = this.formBuilder.group({
			first_name: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Záàâäçéèêëíìîïóòôöúùûü\\-]+'), Validators.maxLength(30)])],
			last_name: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Záàâäçéèêëíìîïóòôöúùûü\\-\\s]+'), Validators.maxLength(150)])],
			email: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9._\\-]+@([a-zA-Z0-9_\\-]+\\.)+[a-z]{2,5}')])],
			phone: ['', Validators.pattern('(([0-9]{2} ?){5}|\\+33[0-9]{9})?')]
		});
  	}

  	next(){
		this.navCtrl.push('Signup2Page', {'account': this.authForm.value});
	}
}
