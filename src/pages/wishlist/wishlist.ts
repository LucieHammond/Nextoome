import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, AlertController} from "ionic-angular";
import {WishlistItem} from "../../models/products";
import {SessionInfos} from "../../services/session-infos";
import {WishDetailsPage} from "../wish-details/wish-details";

@IonicPage()
@Component({
	selector: 'page-wishlist',
	templateUrl: 'wishlist.html',
})
export class WishlistPage {

	wishLists: {name: string, products: WishlistItem[]}[];

	constructor(public navCtrl: NavController, public navParams: NavParams, private session: SessionInfos,
				public alertCtrl: AlertController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad WishlistPage');
		this.wishLists = this.session.getWishLists();
	}

	addList() {
		let alert = this.alertCtrl.create({
			title: 'Nouvelle liste',
			message: "Entrez le nom de la liste de courses",
			inputs: [
				{
					name: 'name',
					placeholder: 'Mes envies'
				},
			],
			buttons: [
				{
					text: 'Annuler',
					handler: data => {
					}
				},
				{
					text: 'Créer',
					handler: data => {
						if (data.name === '') {
							data.name = 'Mes envies';
						}
						this.wishLists.push({name: data.name, products: []});
						window.localStorage.setItem('wishlists', JSON.stringify(this.session.getWishLists()));
					}
				}
			]
		});
		alert.present();
	}

	seeDetails(list: {name: string, products: WishlistItem[]}) {
		let index = this.wishLists.indexOf(list);
		this.navCtrl.push(WishDetailsPage, {name: list.name, products: list.products, index: index});
	}
}
