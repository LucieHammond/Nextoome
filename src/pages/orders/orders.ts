import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {User} from "../../models/users";
import {SessionInfos} from "../../services/session-infos";
import {Status} from "../../config";


@IonicPage()
@Component({
	selector: 'page-orders',
	templateUrl: 'orders.html',
})
export class OrdersPage {

	// statut : on-hold, pending, processing
	currentOrders: any[] = [
		{
			status: 'pending',
			date_modified: '2018-03-28T16:12:17',
			date_created: '2018-03-22T10:09:17',
			total: '36.95',
			total_tax: '1.16',
			line_items: [{name: "Faux-filet Aubrac 200 g"}, {name: 'carottes rapées'}]
		},
		{
			status: 'processing',
			date_modified: '2018-03-27T16:12:17',
			date_created: '2018-03-24T10:09:17',
			total: '16.15',
			total_tax: '0.94',
			line_items: [{name: 'Baguette parisse'}]
		},
	];
	// statut : completed, cancelled, failed, refunded
	passedOrders = [{
		status: 'completed',
		date_modified: '2018-02-28T13:56:17',
		date_created: '2018-03-01T07:11:17',
		total: '59.90',
		total_tax: '2.56',
		line_items: [{name: "Pain aux fruits"}, {name: 'carottes rapées'}, {name: 'Baguette parisse'}]
	}];
	tradStatus = Status;
	user: User;

	constructor(public navCtrl: NavController, public navParams: NavParams, private session: SessionInfos) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad OrdersPage');
		this.session.getCurrentUser().subscribe(user => {
			this.user = user;
			/*this.apiConnector.getUserOrders(this.user.id).subscribe(commandes => {
			 this.toutesCommandes = commandes;
			 });*/
		});
	}

}
