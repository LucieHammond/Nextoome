import { Component, ViewChild } from '@angular/core';
import {IonicPage, NavController, NavParams, DateTime} from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ActivityHours } from '../../config';

@IonicPage()
@Component({
	selector: 'page-help',
	templateUrl: 'help.html',
})
export class HelpPage {
	@ViewChild(Slides) slides: Slides;
	ordersTimeEnd: Date;
	withdrawalTimeStart: Date;
	withdrawalTimeEnd: Date;
	lateOrdersTimeEnd: Date;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.ordersTimeEnd = ActivityHours.ORDERS_END;
		this.withdrawalTimeStart = ActivityHours.WITHDRAWAL_START;
		this.withdrawalTimeEnd = ActivityHours.WITHDRAWAL_END;
		this.lateOrdersTimeEnd = ActivityHours.LATE_ORDERS_END;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HelpPage');
	}

	nextSlide() {
		this.slides.slideNext();
	}

	backToStart() {
		this.slides.slideTo(0);
	}

}
