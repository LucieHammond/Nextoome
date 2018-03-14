import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from '../../models/products';
import {ApiConnectorService} from '../../services/api-connector';
import {User} from '../../models/users'
import {Observable} from "rxjs";
import {Order} from '../../models/orders';
import {SessionInfos} from '../../services/session-infos';
import * as $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

	toutesCommandes: Observable<Order[]>
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiConnector: ApiConnectorService, private session: SessionInfos) {
    this.session.getCurrentUser().subscribe(user => {
			this.user = $.extend(true, {}, user);
		});
    this.toutesCommandes = this.apiConnector.getUserOrders(this.user.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }



}
