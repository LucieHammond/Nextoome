import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SharedBasket } from '../../services/shared-basket'
import { Product } from '../../models/products'
import { PopoverController } from 'ionic-angular';
import {ApiConnectorService} from '../../services/api-connector'
import {SessionInfos} from "../../services/session-infos";


@IonicPage()
@Component({
	selector: 'page-salesProduct',
	templateUrl: 'salesProduct.html',
})


export class SalesProductPage {

	produit_vu: Product = this.navParams.get('name');
	price: number;
	dateDebut: string;
	dateFin: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private session: SessionInfos, private apiConnector: ApiConnectorService) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SalesProductPage');
	}


	MettreEnPromotion(event) {
	  		this.apiConnector.updateProduct(this.produit_vu.id,{sale_price: this.price, date_on_sale_from: this.dateDebut, date_on_sale_to: this.dateFin});
	  		this.ConfirmationPromotion();
	}


	ConfirmationPromotion(){
		let alert = this.alertCtrl.create({
			title: 'Confirmation',
			message: this.produit_vu.name+" en promotion !",
			buttons: [
		  		{text:'OK',
				handler: () => {this.navCtrl.pop();}
		  	}]
		});
		alert.present();
	}

}
