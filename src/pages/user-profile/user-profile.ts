import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/users';
import { SessionInfos } from "../../services/session-infos";
import { PicturePage } from "../picture/picture";
import { OrdersPage } from '../orders/orders';

@IonicPage()
@Component({
	selector: 'page-user-profile',
	templateUrl: 'user-profile.html',
})
export class UserProfilePage {
	user: User;
	edit: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams, private session: SessionInfos) {
		this.user = session.getCurrentUser();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad UserProfilePage');
	}

	editProfile() {
		this.edit = !this.edit;
	}

	saveProfile() {
		this.user = this.session.updateCurrentUser(this.user);
		this.edit = !this.edit;
	}

	cancelChange() {
		this.user = this.session.getCurrentUser();
		this.edit = !this.edit;
	}

	displayPicture(url: string){
		this.navCtrl.push(PicturePage,{imgUrl: url, editable: true}, {animation: "md-transition"});
	}

	seeOrders(){
		this.navCtrl.setRoot(OrdersPage, {}, {animate: true, direction: "forward"});
	}
}
