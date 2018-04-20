import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";


@IonicPage()
@Component({
	selector: 'page-nextoos',
	templateUrl: 'nextoos.html',
})
export class NextoosPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad NextoosPage');
	}

}
