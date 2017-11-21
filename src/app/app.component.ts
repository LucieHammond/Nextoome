import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FlashSalePage } from '../pages/flash-sale/flash-sale';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { BasketPage } from '../pages/basket/basket';
import { OrdersPage } from '../pages/orders/orders';
import { NextoosPage } from '../pages/nextoos/nextoos';
import { CustomerServicePage } from '../pages/customer-service/customer-service';
import { HelpPage } from '../pages/help/help';
import { ParamsPage } from '../pages/params/params';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = HomePage;

	pages: Array<{title: string, component: any}>;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Home', component: HomePage },
			{ title: 'Vente flash', component: FlashSalePage },
			{ title: 'Mon compte', component: UserProfilePage },
			{ title: "Mes listes d'envies", component: WishlistPage },
			{ title: 'Mon panier', component: BasketPage },
			{ title: 'Mes commandes', component: OrdersPage },
			{ title: 'Mes nextoos', component: NextoosPage },
			{ title: 'Service client', component: CustomerServicePage },
			{ title: 'Aide', component: HelpPage },
			{ title: 'Pamètres', component: ParamsPage },
		];

	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}
}
