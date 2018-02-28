import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProductPage} from '../product/product';
import {Product} from '../../models/products'
import {ProductList} from '../../services/product-list'
import 'rxjs/add/operator/debounceTime';
import {FormControl} from '@angular/forms';
import {ApiConnectorService} from '../../services/api-connector'
import {SessionInfos} from "../../services/session-infos";

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	offres_du_jour: Product[];
	searchTerm: string = '';
	searchControl: FormControl;
	resultatsRecherche: any;
	searching: any = false;

	constructor(public navCtrl: NavController, public navParams: NavParams, public rechercheData: ProductList, private apiConnector: ApiConnectorService) {
		this.searching = false;
		this.searchControl = new FormControl();
		this.rechercheData.getProducts().subscribe(products => {
			this.offres_du_jour = products;
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
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
