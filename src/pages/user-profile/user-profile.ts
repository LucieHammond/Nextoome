import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/users';
import { SessionInfos } from "../../services/session-infos";
import { PicturePage } from "../picture/picture";
import { OrdersPage } from '../orders/orders';
import * as $ from 'jquery';


@IonicPage()
@Component({
	selector: 'page-user-profile',
	templateUrl: 'user-profile.html',
})
export class UserProfilePage {
	user: User;
	edit: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams, private session: SessionInfos) {
		session.getCurrentUser().subscribe(user => {
			this.user = $.extend(true, {}, user);
			// ToRemove
			this.user = <User> {
				id: 2,
				email: "john.doe@example.com",
				first_name: "John",
				last_name: "Doe",
				username: "john.doe",
				orders_count: 0,
				total_spent: "0.00",
				avatar_url: "https://secure.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=96",
				billing: {
				  first_name: "John",
				  last_name: "Doe",
				  company: "",
				  address_1: "969 Market",
				  address_2: "",
				  city: "San Francisco",
				  state: "CA",
				  postcode: "94103",
				  country: "US",
				  email: "john.doe@example.com",
				  phone: "(555) 555-5555"
				},
				shipping: {
				  first_name: "John",
				  last_name: "Doe",
				  company: "",
				  address_1: "969 Market",
				  address_2: "",
				  city: "San Francisco",
				  state: "CA",
				  postcode: "94103",
				  country: "US"
				}
			  }
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad UserProfilePage');
	}

	editProfile() {
		this.edit = !this.edit;
	}

	saveProfile() {
		/*this.session.updateCurrentUser(this.user).subscribe(user => {
			this.user = $.extend(true, {}, user);
		});*/
		this.edit = !this.edit;
	}

	cancelChange() {
		/*this.session.getCurrentUser().subscribe(user => {
			this.user = $.extend(true, {}, user);
		});*/
		this.edit = !this.edit;
	}

	displayPicture(url: string){
		this.navCtrl.push(PicturePage,{imgUrl: url, editable: true}, {animation: "md-transition"});
	}

	seeOrders(){
		this.navCtrl.setRoot(OrdersPage, {}, {animate: true, direction: "forward"});
	}
}
