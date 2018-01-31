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
import { ProductPage } from '../pages/product/product';
import { WelcomePage } from '../pages/welcome/welcome';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = WelcomePage;

	pages: Array<Array<{title: string, component: any, icon: string}>>;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			[{ title: 'Home', component: HomePage, icon: "home" },
			{ title: 'Vente flash', component: FlashSalePage, icon: "flash" }],
			[{ title: 'Mon compte', component: UserProfilePage, icon: "person" },
			{ title: "Mes listes d'envies", component: WishlistPage, icon: "star" },
			{ title: 'Mon panier', component: BasketPage, icon: "cart" },
			{ title: 'Mes commandes', component: OrdersPage, icon: "clipboard" },
			{ title: 'Mes nextoos', component: NextoosPage, icon: "pricetags" }],
			[{ title: 'Service client', component: CustomerServicePage, icon: "mail" },
			{ title: 'Aide', component: HelpPage, icon: "help-circle" },
			{ title: 'Pamètres', component: ParamsPage, icon: "settings" }],
			[{ title: 'Produit', component: ProductPage, icon: "home" }],
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
