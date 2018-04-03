import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SharedBasket } from '../../services/shared-basket'
import { Product } from '../../models/products'
import { PopoverController } from 'ionic-angular';
import {ApiConnectorService} from '../../services/api-connector'
import {SessionInfos} from "../../services/session-infos";


@IonicPage()
@Component({
	selector: 'page-unavailableProduct',
	templateUrl: 'unavailableProduct.html',
})


export class UnavailableProductPage {

	produit_vu: Product = this.navParams.get('name');

	constructor(public navCtrl: NavController, public navParams: NavParams,
				private alertCtrl: AlertController, public popoverCtrl: PopoverController, private session: SessionInfos, private apiConnector: ApiConnectorService) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DeleteProductPage');
	}


	RendreIndisponibleProduit(event) {
	  		this.apiConnector.updateProduct(this.produit_vu.id,{in_stock: false});
	  		this.ConfirmationIndispo();
	}

	ConfirmationIndispo(){
		let alert = this.alertCtrl.create({
			title: 'Confirmation',
			message: this.produit_vu.name+" rendu indisponible !",
			buttons: [
		  		{text:'OK',
				handler: () => {this.navCtrl.pop();}
		  	}]
		});
		alert.present();
	}
}
