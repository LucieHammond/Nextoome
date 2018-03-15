import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProductPage} from '../product/product';
import {Product} from '../../models/products'
import {ProductList} from '../../services/product-list'
import 'rxjs/add/operator/debounceTime';
import {FormControl} from '@angular/forms';
import {MyApp} from "../../app/app.component";

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	offres_du_jour: Product[];
	searchTerm: string = '';
	searchControl: FormControl = new FormControl();
	resultatsRecherche: any;
	searching: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams, public rechercheData: ProductList) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
		this.rechercheData.getProducts().subscribe(products => {
			this.offres_du_jour = products;
		});
	}

	SelectionProduit(event, produit) {
		this.navCtrl.push(ProductPage, {name: produit});
	}

	onSearchInput() {
		this.searching = true;
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
}
