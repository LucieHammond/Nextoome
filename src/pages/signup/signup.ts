import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { UserProvider } from '../../providers/providers';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { prenom: string, nom: string, email: string, tel: string, adresse: string, cp: string, password: string }=
  { prenom:"",nom:"",email:"",tel:"+33",adresse:"",cp:"",password:""};

  isenabled:boolean=false;
  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: UserProvider,
    public toastCtrl: ToastController) {
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      //this.navCtrl.push(MainPage);
    }, (err) => {

      //this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
