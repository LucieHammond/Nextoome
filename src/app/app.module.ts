import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
// import {Camera} from '@ionic-native/camera';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {EmailComposer} from '@ionic-native/email-composer';

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
import {ContactPage} from '../pages/contact/contact'

import {ApiConnectorService} from '../services/api-connector';
import {SessionInfos} from '../services/session-infos';
import {SharedBasket} from '../services/shared-basket';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { ProductList } from '../services/product-list'
import { UserProvider } from '../providers/providers';
import { ApiProvider } from '../providers/api/api';
import { WelcomePage } from '../pages/welcome/welcome';


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
		WelcomePage
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
		WelcomePage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		//Camera,
		ApiConnectorService,
		SharedBasket,
		SessionInfos,
		ProductList,
		InAppBrowser,
		EmailComposer,
		UserProvider,
		ApiProvider  
	]
})
export class AppModule {
}
