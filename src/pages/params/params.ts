import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SessionInfos} from "../../services/session-infos";

@IonicPage()
@Component({
	selector: 'page-params',
	templateUrl: 'params.html',
})
export class ParamsPage {

	settings: {id: number, key: string, value: string}[];
	notifDelivery: boolean;
	notifPromotions: boolean;
	notifNewVendors: boolean;
	notifNewsletter: boolean;

	constructor(public navCtrl: NavController, public navParams: NavParams, private session: SessionInfos) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ParamsPage');
		this.session.getCurrentUser().subscribe(user => {
			this.settings = user.meta_data;
			let delivery = this.settings.find((data) => {return data.key == 'notif_delivery';});
			let promotions = this.settings.find((data) => {return data.key == 'notif_promotions';});
			let newVendors = this.settings.find((data) => {return data.key == 'notif_new_vendors';});
			let newsletter = this.settings.find((data) => {return data.key == 'notif_newsletter';});

			if (delivery) { this.notifDelivery = (delivery.value == 'true'); }
			if (promotions) { this.notifDelivery = (promotions.value == 'true'); }
			if (newVendors) { this.notifDelivery = (newVendors.value == 'true'); }
			if (newsletter) { this.notifDelivery = (newsletter.value == 'true'); }
		});
	}

	changeSettings(key: string, value: boolean){

		let setting = this.settings.find((data) => {return data.key == key;});
		if (setting) {
			setting.value = value.toString();
		} else {
			this.settings.push({key: key, value: value.toString()})
		}

		this.session.updateUserSettings(this.settings).subscribe((user) => {
			// Ne marche pas pour le moment (metadata n'est pas modifiable de cette façon)
			console.log(JSON.stringify(user));
		});
	}
}
