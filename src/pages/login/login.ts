import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserProvider } from '../../providers/providers';
import {HomePage} from '../../pages/home/home';
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

      this.nav = nav;

      this.authForm = formBuilder.group({
          username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(6), Validators.maxLength(30)])],
          password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
  }

  onSubmit(value: any): void { 
      if(this.authForm.valid) {
          window.localStorage.setItem('username', value.username);
          window.localStorage.setItem('password', value.password);

          this.nav.push(HomePage);
      }
  }  
}