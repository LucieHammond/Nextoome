import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {InAppBrowser} from "@ionic-native/in-app-browser";


@IonicPage()
@Component({
	selector: 'page-customer-service',
	templateUrl: 'customer-service.html',
})
export class CustomerServicePage {

	constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CustomerServicePage');
	}

	openWithBrowser(url: string) {
		this.iab.create(url, '_blank', 'location=yes');
	}

	openEmail() {
	}
}
