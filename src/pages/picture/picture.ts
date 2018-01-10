import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
	selector: 'page-picture',
	templateUrl: 'picture.html',
})
export class PicturePage {
	imgUrl: string;
	editable: boolean = false;
/*
	constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
		this.imgUrl = navParams.get("imgUrl");
		this.editable = navParams.get("editable" );
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PicturePage');
	}

	close(): void{
		this.navCtrl.pop({animation: "md-transition"});
	}

	openGallery (): void {
		const options: CameraOptions = {
			quality: 100,
			sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
			destinationType: this.camera.DestinationType.FILE_URI,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
			correctOrientation: true
		};

		this.camera.getPicture(options).then((imageUri) => {
			this.imgUrl = imageUri;
			console.log(imageUri);
		}, (err) => {
			console.log(err);
		});
	}*/

}
