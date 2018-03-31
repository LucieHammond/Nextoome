import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { SharedBasket } from '../../services/shared-basket'
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { ApiConnectorService } from "../../services/api-connector";
import { SessionInfos } from "../../services/session-infos";
import { User } from "../../models/users";
import { Product } from '../../models/products'
import { UserProfilePage } from "../user-profile/user-profile";


@IonicPage()
@Component({
	selector: 'page-livraison',
	templateUrl: 'livraison.html',
})
export class LivraisonPage {

	contenuPanier: Product[] ;
	prixDuPanier: string;
	commentaires: string;
	deliveryMode: string = null;
	user: User;

	constructor(public navCtrl: NavController, public navParams: NavParams, public sharedbasket: SharedBasket,
				private payPal: PayPal, private apiConnector: ApiConnectorService, private session: SessionInfos,
				private alertCtrl: AlertController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad livraisonPage');
		this.contenuPanier = this.sharedbasket.getBasket();
		this.prixDuPanier = this.sharedbasket.getTotalPrice().toFixed(2);
		this.session.getCurrentUser().subscribe(user => {
			this.user = user;
		});
	}

	ionViewWillEnter() {
		this.session.getCurrentUser().subscribe(user => {
			this.user = user;
		});
	}

	changeAddress(): void {
		this.navCtrl.push(UserProfilePage);
	}

	PasserCommande(event){
		if (!this.user.billing.address_1 || !this.user.billing.city || !this.user.billing.postcode
			|| (this.deliveryMode == 'domicile' &&
			(!this.user.billing.address_1 || !this.user.billing.city || !this.user.billing.postcode))){

			// An address is missing
			let alert = this.alertCtrl.create({
				title: 'Adresse manquante',
				message: 'Attention, vous devez indiquer une adresse valide',
				buttons: [{
					text: "J'ai compris",
					role: 'cancel',
					handler: () => {}
				}]
			});
			alert.present();
		}

		this.payPal.init({
			PayPalEnvironmentProduction: 'stephane@nextoome.fr',
			PayPalEnvironmentSandbox: 'AfkBTBO0h70ZfZX7Ou2YftIra7Rbvl7F18MT2gSaT7yTZfrXyjxBkH-OTxUeUeEumMlkDqsIzoFvEIL4'
		}).then(() => {

			// Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
			this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({})
			).then(() => {

				let price = this.sharedbasket.getTotalPrice().toString();
				let payment = new PayPalPayment(price, 'EUR', 'Description', 'sale');
				this.payPal.renderSinglePaymentUI(payment).then(() => {

					// Successfully paid
					this.navCtrl.push("ConfirmationPage");
					this.apiConnector.createOrder(this.currentOrder());

				}, () => {
					// Error or render dialog closed without being successful
				});
			}, () => {
				// Error in configuration
			});
		}, () => {
			// Error in initialization, maybe PayPal isn't supported or something else
		});
	}

	currentOrder() {
		let items = [];
		let basket: Product[] = this.sharedbasket.getBasket();
		for (let i = 0; i < basket.length; i++){
			items.push({
				name: basket[i].name,
				product_id: basket[i].id,
				quantity: basket[i].quantite_panier,
				meta_data: basket[i].meta_data,
				sku: basket[i].sku,
				price: basket[i].price
			})
		}
		let shipping = this.deliveryMode == 'domicile' ? this.user.shipping : {
			address_1: '2, rue de la Gare',
			city: 'Thorigny-sur-Marne',
			postcode: '77400',
			country: 'FR'
		};

		return {
			payment_method: 'paypal',
			billing: this.user.billing,
			shipping: shipping,
			customer_id: this.user.id,
			line_items: items,
			status: 'processing',
			customer_note: this.commentaires,
			currency: 'EUR',
			set_paid: true
		};
	}

}
