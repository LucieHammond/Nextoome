import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, AlertController} from "ionic-angular";
import {EmailComposer} from "@ionic-native/email-composer";


@IonicPage()
@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html',
})
export class ContactPage {
	subject: string;
	message: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, private email: EmailComposer, public alertCtrl: AlertController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ContactPage');
	}

	sendEmail() {
		if (!this.subject || !this.message) {
			this.showAlert();
			return
		}

		this.email.isAvailable().then((available: boolean) => {
			if (available) {
				let email = {
					to: 'lucie_hammond@hotmail.fr',
					subject: this.subject,
					body: this.message,
					isHtml: false
				};

				// Send a text message using default options
				this.email.open(email);
			} else {
				return
			}
		});
	}

	showAlert() {
		let alert = this.alertCtrl.create({
			title: 'Email incomplet',
			subTitle: 'Vous devez remplir les champs Objet et Message',
			buttons: ['OK']
		});
		alert.present();
	}
}
