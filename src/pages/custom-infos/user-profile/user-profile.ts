import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {User} from "@models/users";
import {SessionInfos} from "@services/session-infos";
import {PicturePage} from "../picture/picture";
import {OrdersPage} from "../orders/orders";
import * as $ from "jquery";


@IonicPage()
@Component({
	selector: 'page-user-profile',
	templateUrl: 'user-profile.html',
})
export class UserProfilePage {
	user: User;
	edit: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams, private session: SessionInfos) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad UserProfilePage');
		this.session.getCurrentUser().subscribe(user => {
			this.user = $.extend(true, {}, user);
		});
	}

	editProfile() {
		this.edit = !this.edit;
	}

	saveProfile() {
		this.session.updateCurrentUser(this.user).subscribe(user => {
			this.user = $.extend(true, {}, user);
		});
		this.edit = !this.edit;
	}

	cancelChange() {
		this.session.getCurrentUser().subscribe(user => {
			this.user = $.extend(true, {}, user);
		});
		this.edit = !this.edit;
	}

	displayPicture(url: string) {
		this.navCtrl.push(PicturePage, {imgUrl: url, editable: false}, {animation: "md-transition"});
	}

	seeOrders() {
		this.navCtrl.setRoot(OrdersPage, {}, {animate: true, direction: "forward"});
	}
}
