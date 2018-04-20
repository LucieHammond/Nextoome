import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {HTTP} from "@ionic-native/http";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {PayPal} from "@ionic-native/paypal";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {MyApp} from "./app.component";
import {ApiConnectorService} from "@services/api-connector";
import {SessionInfos} from "@services/session-infos";
import {SharedBasket} from "@services/shared-basket";
import {ProductList} from "@services/product-list";
import {HomePage} from "../pages/shopping/home/home";
import {FlashSalePage} from "../pages/shopping/flash-sale/flash-sale";
import {UserProfilePage} from "../pages/custom-infos/user-profile/user-profile";
import {WishlistPage} from "../pages/shopping/wishlist/wishlist";
import {BasketPage} from "../pages/shopping/basket/basket";
import {OrdersPage} from "../pages/custom-infos/orders/orders";
import {NextoosPage} from "../pages/custom-infos/nextoos/nextoos";
import {CustomerServicePage} from "../pages/custom-infos/customer-service/customer-service";
import {HelpPage} from "../pages/custom-infos/help/help";
import {ParamsPage} from "../pages/custom-infos/params/params";
import {ProductPage} from "../pages/shopping/product/product";
import {PicturePage} from "../pages/custom-infos/picture/picture";
import {WelcomePage} from "../pages/start/welcome/welcome";
import {MaintenancePage} from "../pages/start/maintenance/maintenance";
import {CategoriesPage} from "../pages/shopping/categories/categories";
import {ProductByCategoryPage} from "../pages/shopping/productByCategory/productByCategory";
import {DeliveryPage} from "../pages/shopping/delivery/delivery";
import {VendorHomePage} from "../pages/vendor-space/vendorHome/vendorHome";
import {CreateProductPage} from "../pages/vendor-space/createProduct/createProduct";
import {WishDetailsPage} from "../pages/shopping/wish-details/wish-details";
import {ModifyProductPage} from "../pages/vendor-space/modifyProduct/modifyProduct";
import {SelectProductPage} from "../pages/vendor-space/selectProduct/selectProduct";
import {DeleteProductPage} from "../pages/vendor-space/deleteProduct/deleteProduct";
import {UnavailableProductPage} from "../pages/vendor-space/unavailableProduct/unavailableProduct";
import {SalesProductPage} from "../pages/vendor-space/salesProduct/salesProduct";


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
		WelcomePage,
		MaintenancePage,
		CategoriesPage,
		ProductByCategoryPage,
		DeliveryPage,
		VendorHomePage,
		CreateProductPage,
		WishDetailsPage,
		ModifyProductPage,
		SelectProductPage,
		DeleteProductPage,
		UnavailableProductPage,
		SalesProductPage
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
		WelcomePage,
		MaintenancePage,
		CategoriesPage,
		ProductByCategoryPage,
		DeliveryPage,
		VendorHomePage,
		CreateProductPage,
		WishDetailsPage,
		ModifyProductPage,
		SelectProductPage,
		DeleteProductPage,
		UnavailableProductPage,
		SalesProductPage
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
