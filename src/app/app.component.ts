import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ApiConnectorService} from "../services/api-connector";

import {HomePage} from '../pages/home/home';
import {FlashSalePage} from '../pages/flash-sale/flash-sale';
import {UserProfilePage} from '../pages/user-profile/user-profile';
import {WishlistPage} from '../pages/wishlist/wishlist';
import {BasketPage} from '../pages/basket/basket';
import {OrdersPage} from '../pages/orders/orders';
import {NextoosPage} from '../pages/nextoos/nextoos';
import {CustomerServicePage} from '../pages/customer-service/customer-service';
import {HelpPage} from '../pages/help/help';
import {ParamsPage} from '../pages/params/params';
import {ProductPage} from '../pages/product/product';
import {WelcomePage} from '../pages/welcome/welcome';
import {MaintenancePage} from '../pages/maintenance/maintenance';


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any;
	availability: boolean = true;

	pages: Array<Array<{title: string, component: any, icon: string}>> = [
			[{title: 'Home', component: HomePage, icon: "home"},
				{title: 'Vente flash', component: FlashSalePage, icon: "flash"}],
			[{title: 'Mon compte', component: UserProfilePage, icon: "person"},
				{title: "Mes listes d'envies", component: WishlistPage, icon: "star"},
				{title: 'Mon panier', component: BasketPage, icon: "cart"},
				{title: 'Mes commandes', component: OrdersPage, icon: "clipboard"},
				{title: 'Mes nextoos', component: NextoosPage, icon: "pricetags"}],
			[{title: 'Service client', component: CustomerServicePage, icon: "mail"},
				{title: 'Aide', component: HelpPage, icon: "help-circle"},
				{title: 'Paramètres', component: ParamsPage, icon: "settings"}],
			[{title: 'Produit', component: ProductPage, icon: "home"}],
		];

	constructor(public platform: Platform,
				public statusBar: StatusBar,
				public splashScreen: SplashScreen,
				private apiConnector: ApiConnectorService)
	{
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {

			// Vérifier que le site n'est pas en maintenance
			this.apiConnector.testConnection().subscribe(contentType => {
				if (contentType.indexOf('application/json') == -1){
					this.availability = false;
				}
			});

			// Rediriger vers la bonne page
			let userid = window.localStorage.getItem('user');
			if (!this.availability){
				this.rootPage = MaintenancePage;
			} else if (userid == 'null') {
				this.rootPage = WelcomePage;
			} else {
				this.rootPage = HomePage;
			}

			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}

	deconnect() {
		window.localStorage.setItem('user', null);
		this.nav.setRoot(WelcomePage);
	}
}
