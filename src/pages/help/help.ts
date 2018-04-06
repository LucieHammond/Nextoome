import {Component, ViewChild} from "@angular/core";
import {IonicPage, NavController, NavParams, Slides} from "ionic-angular";
import {ActivityHours} from "../../config";

@IonicPage()
@Component({
	selector: 'page-help',
	templateUrl: 'help.html',
})
export class HelpPage {
	@ViewChild(Slides) slides: Slides;
	ordersTimeEnd: Date = ActivityHours.ORDERS_END;
	withdrawalTimeStart: Date = ActivityHours.WITHDRAWAL_START;
	withdrawalTimeEnd: Date = ActivityHours.WITHDRAWAL_END;
	lateOrdersTimeEnd: Date = ActivityHours.LATE_ORDERS_END;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
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
