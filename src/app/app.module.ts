import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {HTTP} from '@ionic-native/http';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {PayPal} from '@ionic-native/paypal';

import {MyApp} from './app.component';
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
import {PicturePage} from '../pages/picture/picture';
import {ContactPage} from '../pages/contact/contact';
import {WelcomePage} from '../pages/welcome/welcome';
import {MaintenancePage} from '../pages/maintenance/maintenance';
import {CategoriesPage} from '../pages/categories/categories'
import {ProductByCategoryPage} from '../pages/productByCategory/productByCategory'
import {LivraisonPage} from '../pages/livraison/livraison'

import {ApiConnectorService} from '../services/api-connector';
import {SessionInfos} from '../services/session-infos';
import {SharedBasket} from '../services/shared-basket';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { ProductList } from '../services/product-list';


@NgModule({
	declarations: [
		MyApp,
		HomePage,
		FlashSalePage,
		UserProfilePage,
		WishlistPage,
		BasketPage,
		OrdersPage,
		NextoosPage,
		HelpPage,
		CustomerServicePage,
		ParamsPage,
		ProductPage,
		PicturePage,
		ContactPage,
		WelcomePage,
		MaintenancePage,
		CategoriesPage,
		ProductByCategoryPage,
		LivraisonPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		HttpClientModule,
		HttpModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		FlashSalePage,
		UserProfilePage,
		WishlistPage,
		BasketPage,
		OrdersPage,
		NextoosPage,
		HelpPage,
		CustomerServicePage,
		ParamsPage,
		ProductPage,
		PicturePage,
		ContactPage,
		WelcomePage,
		MaintenancePage,
		CategoriesPage,
		ProductByCategoryPage,
		LivraisonPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		ApiConnectorService,
		SharedBasket,
		SessionInfos,
		ProductList,
		InAppBrowser,
		HTTP,
		PayPal
	]
})
export class AppModule {
}
