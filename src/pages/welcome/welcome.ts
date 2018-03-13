import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {ApiConnectorService} from "../../services/api-connector";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, private apiConnector: ApiConnectorService) {
	apiConnector.testConnection().subscribe(headers => console.log("headers", headers))
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

}
