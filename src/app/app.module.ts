import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
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
import { ApiConnectorService } from '../services/api-connector';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    ParamsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
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
    ParamsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiConnectorService
  ]
})
export class AppModule {}
