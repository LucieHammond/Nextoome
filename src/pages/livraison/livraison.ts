import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Product } from '../../models/products'
import { SharedBasket } from '../../services/shared-basket'
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';


@IonicPage()
@Component({
	selector: 'page-livraison',
	templateUrl: 'livraison.html',
})
export class LivraisonPage {

	contenuPanier: Product[] ;
	prixDuPanier: number;
	commentaires: string;
	prixPanierAffiche: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public sharedbasket: SharedBasket,
				private payPal: PayPal) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad livraisonPage');
		this.contenuPanier = this.sharedbasket.getBasket();
			this.prixDuPanier = this.sharedbasket.getTotalPrice();
			this.prixPanierAffiche = this.prixDuPanier.toFixed(2);

		}

		PasserCommande(event){
			this.payPal.init({
				PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
				PayPalEnvironmentSandbox: 'YOUR_SANDBOX_CLIENT_ID'
			}).then(() => {
				// Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
				this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
					// Only needed if you get an "Internal Service Error" after PayPal login!
					//payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
				})).then(() => {
					let price = this.sharedbasket.getTotalPrice().toString();
					let payment = new PayPalPayment(price, 'EUR', 'Description', 'sale');
					this.payPal.renderSinglePaymentUI(payment).then(() => {
						// Successfully paid
						this.navCtrl.push("ConfirmationPage");

						// Example sandbox response
						//
						// {
						//   "client": {
						//     "environment": "sandbox",
						//     "product_name": "PayPal iOS SDK",
						//     "paypal_sdk_version": "2.16.0",
						//     "platform": "iOS"
						//   },
						//   "response_type": "payment",
						//   "response": {
						//     "id": "PAY-1AB23456CD789012EF34GHIJ",
						//     "state": "approved",
						//     "create_time": "2016-10-03T13:33:33Z",
						//     "intent": "sale"
						//   }
						// }
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

}