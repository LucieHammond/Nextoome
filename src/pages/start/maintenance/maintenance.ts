import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";


@IonicPage()
@Component({
	selector: 'page-maintenance',
	templateUrl: 'maintenance.html',
})
export class MaintenancePage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MaintenancePage');
	}

}
