import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from "../../models/products";
import {SessionInfos} from "../../services/session-infos";

@IonicPage()
@Component({
	selector: 'page-wishlist',
	templateUrl: 'wishlist.html',
})
export class WishlistPage {

	wishLists: {name: string, products: any[]}[];

	constructor(public navCtrl: NavController, public navParams: NavParams, private session: SessionInfos) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad WishlistPage');
		//this.wishLists = this.session.getWishLists();
		this.wishLists = [{name: 'Courses week-end', products: []},
			{name: 'Fêtes Noêl', products: [{images: {src: "https://lagny.nextoome.fr/wp-content/uploads/2017/10/painaufruits.jpg"}}]},
			{name: "Diner d'amis", products: [{images: {src: "https://lagny.nextoome.fr/wp-content/uploads/2017/10/baguette.png"}}]}]
	}
}
