import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
	selector: 'page-picture',
	templateUrl: 'picture.html',
})
export class PicturePage {
	imgUrl: string;
	editable: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.imgUrl = navParams.get("imgUrl");
		this.editable = navParams.get("editable" );
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PicturePage');
	}

	close(): void{
		this.navCtrl.pop({animation: "md-transition"});
	}

	changeAvatar(): void {
		// Implémenter ici une façon de changer la photo de profil
		// Pour le moment ce type de changement n'est pas accepté par l'API
		// Le changement a été désactivé par défault
	}
}
