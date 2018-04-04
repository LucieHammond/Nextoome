import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProductPage} from '../product/product';
import {Product} from '../../models/products'
import {User} from '../../models/users'
import {ProductList} from '../../services/product-list'
import {SessionInfos} from '../../services/session-infos'
import 'rxjs/add/operator/debounceTime';
import {FormControl} from '@angular/forms';
import {EspaceCommercantPage} from '../espaceCommercant/espaceCommercant'
import * as $ from 'jquery';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	produitsAccueil: Product[];
	searchTerm: string = '';
	searchControl: FormControl = new FormControl();
	resultatsRecherche: any;
	searching: boolean = false;
	user: User;
	isShop: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams, public rechercheData: ProductList, public listProduits: ProductList, private session: SessionInfos) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');

		this.session.getCurrentUser().subscribe(user => {
			this.user = $.extend(true, {}, user);
			this.isShop = !(this.user.role=="vendor"); //enlever la négation !! 
		});
		this.listProduits.getProducts().subscribe(produits =>{
			this.produitsAccueil = produits.filter((produit) => {
				return produit.in_stock;
			});
		});
	}

	SelectionProduit(event, produit) {
		this.navCtrl.push(ProductPage, {name: produit});
	}

	onSearchInput() {
		this.searching = true;
	}

AccesCommercant(event){
	this.navCtrl.push(EspaceCommercantPage);
}

	RechercheProduits() {
		this.rechercheData.getProducts().subscribe(produits => {
			this.resultatsRecherche = produits.filter((produit) => {
				return produit.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
			});
			this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
				this.RechercheProduits();
			});
		});
	}

	doRefresh(event){
		this.listProduits.getProducts().subscribe(produits =>{
			this.produitsAccueil = produits.filter((produit) => {
				return produit.in_stock;
			});
					this.searchTerm ='';
					this.resultatsRecherche = null;
					event.complete();
		});
	}
}
