import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {WishlistItem, Product} from "../../models/products";
import {ProductList} from "../../services/product-list";
import {SessionInfos} from "../../services/session-infos";


@IonicPage()
@Component({
	selector: 'page-wish-details',
	templateUrl: 'wish-details.html',
})
export class WishDetailsPage {

	index: number;
	name: string;
	items: WishlistItem[];
	linkedProducts: Product[] = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private productProvider: ProductList,
				private session: SessionInfos, private alertCtrl: AlertController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad WishDetailsPage');
		this.name = this.navParams.get('index');
		this.name = this.navParams.get('name');
		this.items = this.navParams.get('products');
		this.productProvider.getProducts().subscribe(products => {
			for (let i=0; i < this.items.length; i++){
				let product = products.find((prod) => {return prod.id == this.items[i].id;});
				if (!product){ product = null; }
				this.linkedProducts.push(product);
			}
		});
	}

	removeItem(item) {
		let index = this.items.indexOf(item);
		this.items.splice(index, 1);
		if (this.linkedProducts){
			this.linkedProducts.splice(index, 1);
		}
	}

	increase(item) {
		item.quantity++;
	}

	decrease(item) {
		item.quantity--;
		if (item.quantity === 0) {
			this.removeItem(item);
		}
	}

	deleteList() {
		let alert = this.alertCtrl.create({
			title: 'Suppression des données',
			message: 'Voulez-vous vraiment supprimer cette liste de courses ?',
			buttons: [
				{text: 'Annuler'},
				{text:'OK', handler: () => {
					this.navCtrl.pop();
					this.session.getWishLists().splice(this.index, 1);
				}}]
		});
		alert.present();
	}
}
