import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, LoadingController} from "ionic-angular";
import {User} from "@models/users";
import {Order} from "@models/orders"
import {SessionInfos} from "@services/session-infos";
import {ApiConnectorService} from "@services/api-connector";
import {Status} from "@nextoome/config";


@IonicPage()
@Component({
	selector: 'page-orders',
	templateUrl: 'orders.html',
})
export class OrdersPage {

	currentOrders: Order[];
	passedOrders: Order[];
	tradStatus = Status;
	user: User;

	constructor(public navCtrl: NavController, public navParams: NavParams, private session: SessionInfos,
				private apiConnector: ApiConnectorService, public loadingCtrl: LoadingController,) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad OrdersPage');

		let presentStatus = ["on-hold", "pending", "processing"];
		let passedStatus = ["completed", "cancelled", "failed", "refunded"];

		this.session.getCurrentUser().subscribe(user => {
			this.user = user;

			let loading = this.loadingCtrl.create({
				spinner: 'bubbles'
			});

			loading.present().then(() => {
				this.apiConnector.getOrdersList().subscribe(orders => {
					this.currentOrders = orders.filter((order) => {
						return order.customer_id == this.user.id && presentStatus.indexOf(order.status) >= 0;
					});
					this.passedOrders = orders.filter((order) => {
						return order.customer_id == this.user.id && passedStatus.indexOf(order.status) >= 0;
					});
					loading.dismiss();
				});
			});
		});
	}

}
