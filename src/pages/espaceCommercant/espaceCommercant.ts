import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CreateProductPage} from '../createProduct/createProduct';



@IonicPage()
@Component({
	selector: 'page-espaceCommercant',
	templateUrl: 'espaceCommercant.html',
})
export class EspaceCommercantPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EspaceCommercantPage');
	}

	createProduct(event) {
		this.navCtrl.push(CreateProductPage);
	}


}
