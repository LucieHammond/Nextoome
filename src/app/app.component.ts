import {Component, ViewChild} from "@angular/core";
import {Nav, Platform, Events} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {ApiConnectorService} from "@services/api-connector";
import {SessionInfos} from "@services/session-infos";
import {User} from "@models/users";
import {HomePage} from "../pages/shopping/home/home";
import {FlashSalePage} from "../pages/shopping/flash-sale/flash-sale";
import {UserProfilePage} from "../pages/custom-infos/user-profile/user-profile";
import {CategoriesPage} from "../pages/shopping/categories/categories";
import {WishlistPage} from "../pages/shopping/wishlist/wishlist";
import {BasketPage} from "../pages/shopping/basket/basket";
import {OrdersPage} from "../pages/custom-infos/orders/orders";
import {NextoosPage} from "../pages/custom-infos/nextoos/nextoos";
import {CustomerServicePage} from "../pages/custom-infos/customer-service/customer-service";
import {HelpPage} from "../pages/custom-infos/help/help";
import {ParamsPage} from "../pages/custom-infos/params/params";
import {ProductPage} from "../pages/shopping/product/product";
import {WelcomePage} from "../pages/start/welcome/welcome";
import {MaintenancePage} from "../pages/start/maintenance/maintenance";


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any;
	user: User = null;

	pages: Array<Array<{title: string, component: any, icon: string}>> = [
		[{title: 'Home', component: HomePage, icon: "home"},
			{title: 'Vente flash', component: FlashSalePage, icon: "flash"}],
		[{title: 'Mon compte', component: UserProfilePage, icon: "person"},
			{title: "Listes de courses", component: WishlistPage, icon: "star"},
			{title: 'Tous les produits', component: CategoriesPage, icon: "nutrition"},
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
				public events: Events,
				private apiConnector: ApiConnectorService,
				private session: SessionInfos) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			let token = window.localStorage.getItem('token');
			let userid = window.localStorage.getItem('user');

			// Vérifier que le site n'est pas en maintenance, puis rediriger vers la bonne page
			this.apiConnector.testConnection().subscribe(contentType => {
				// 1. On vérifie que l'API est disponible
				if (contentType.indexOf('application/json') == -1) {
					this.rootPage = MaintenancePage;
				}
				// 2. On vérifie qu'on a bien un token
				else if (token === null || userid === null || token == 'null' || userid == 'null') {
					this.rootPage = WelcomePage;
				}
				// 3. On vérifie que le token est bien valide
				else {
					this.apiConnector.validateToken().subscribe(response => {
						if (response.data.status != 200) {
							this.rootPage = WelcomePage;
						} else {
							this.updateUser();
							this.rootPage = HomePage;
						}
					});
				}

				this.statusBar.styleDefault();
				this.splashScreen.hide();

				// Update user data when changed
				this.events.subscribe('user:defined', () => {
					this.updateUser();
				});

				// Save local data when app is set to background
				this.platform.pause.subscribe(() => {
				});
			});
		});
	}

	updateUser() {
		this.session.getCurrentUser().subscribe(user => {
			this.user = user;
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}

	disconnect() {
		this.session.closeSession();
		window.localStorage.setItem('user', null);
		window.localStorage.setItem('token', null);
		this.nav.setRoot(WelcomePage);
	}
}
