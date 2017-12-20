import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { Product } from '../../models/products'
import { ProductList } from '../../services/product-list'
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  offres_du_jour: Product[] ;
  searchTerm: string = '';
  searchControl: FormControl;
  resultatsRecherche: any;
  searching: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rechercheData: ProductList)
  {
        this.searching = false;
        this.searchControl = new FormControl();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.RechercheProduits;
  }

  SelectionProduit(event, produit){
    this.navCtrl.push(ProductPage,{name: produit});
  }

  onSearchInput(){
      this.searching = true;
  }

  RechercheProduits() {

    this.resultatsRecherche = this.rechercheData.filterItems(this.searchTerm);

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {this.RechercheProduits();});
}
}
