import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {SessionInfos} from "@services/session-infos";

@IonicPage()
@Component({
	selector: 'page-params',
	templateUrl: 'params.html',
})
export class ParamsPage {

	userId: number = null;
	notifDelivery: boolean;
	notifPromotions: boolean;
	notifNewVendors: boolean;
	notifNewsletter: boolean;

	constructor(public navCtrl: NavController, public navParams: NavParams, private session: SessionInfos) {
	}

	// TODO : Stocker les choix de l'utilisateur sur le serveur plutôt qu'en local
	/**
	 * Pour le moment, les choix réalisés sont stockés provisoirement en local (et de façon pas très propre),
	 * chaque choix restant associé à un utilisateur particulier s'étant connecté à l'app.
	 * L'API Nextoome ne permet pas à ce jour de stocker ce type de préférences sur les notifications.
	 * Nous avons essayé de modifier les meta_data d'un customer mais ce genre de changement s'est révélé impossible
	 * et inadapté.
	 */
	// TODO : Implémenter les notifications push
	/**
	 * Par la même occasion, il faudra implémenter concretement une façon d'envoyer aux utilisateurs qui le souhaitent
	 * des notifications push dont le contenu sera créé soit automatiquement soit manuellement.
	 */

	ionViewDidLoad() {
		console.log('ionViewDidLoad ParamsPage');
		this.session.getCurrentUser().subscribe(user => {
			this.userId = user.id;
			this.notifDelivery = (window.localStorage.getItem(user.id + ':notif_delivery') == 'true');
			this.notifPromotions = (window.localStorage.getItem(user.id + ':notif_promotions') == 'true');
			this.notifNewVendors = (window.localStorage.getItem(user.id + ':notif_new_vendors') == 'true');
			this.notifNewsletter = (window.localStorage.getItem(user.id + ':notif_newsletter') == 'true');
		});
	}

	changeSettings(key: string, value: boolean) {

		window.localStorage.setItem(this.userId + ':' + key, value.toString());

	}
}
