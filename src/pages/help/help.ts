import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-help',
	templateUrl: 'help.html',
})
export class HelpPage {
	@ViewChild(Slides) slides: Slides;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HelpPage');
	}

	nextSlide() {
		this.slides.slideNext();
	}

}
