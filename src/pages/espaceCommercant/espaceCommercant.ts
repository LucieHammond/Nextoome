import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {CreateProductPage} from '../createProduct/createProduct';



@IonicPage()
@Component({
	selector: 'page-espaceCommercant',
	templateUrl: 'espaceCommercant.html',
})
export class EspaceCommercantPage {



	constructor(public navCtrl: NavController)
	{
  }

	createProduct(event){
		this.navCtrl.push(CreateProductPage);
	}



}
