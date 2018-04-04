import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CreateProductPage} from '../createProduct/createProduct';
import {SelectProductPage} from '../selectProduct/selectProduct';



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

	modifyProduct(event) {
		this.navCtrl.push(SelectProductPage,{action:"modify"});
	}

	unavailableProduct(event){
		this.navCtrl.push(SelectProductPage,{action:"unavailable"})
	}

	deleteProduct(event) {
			this.navCtrl.push(SelectProductPage,{action:"delete"});
		}

}
