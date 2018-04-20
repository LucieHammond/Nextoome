import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, AlertController} from "ionic-angular";
import {Product} from "@models/products";
import {ApiConnectorService} from "@services/api-connector";


@IonicPage()
@Component({
	selector: 'page-salesProduct',
	templateUrl: 'salesProduct.html',
})


export class SalesProductPage {

	product: Product = this.navParams.get('name');
	price: number;
	startDate: string;
	endDate: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private apiConnector: ApiConnectorService) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SalesProductPage');
	}


	putOnSale(event) {
		this.apiConnector.updateProduct(this.product.id, {
			sale_price: this.price,
			date_on_sale_from: this.startDate,
			date_on_sale_to: this.endDate
		});
		this.confirmPromotion();
	}


	confirmPromotion() {
		let alert = this.alertCtrl.create({
			title: 'Confirmation',
			message: this.product.name + " en promotion !",
			buttons: [
				{
					text: 'OK',
					handler: () => {
						this.navCtrl.pop();
					}
				}]
		});
		alert.present();
	}

}
