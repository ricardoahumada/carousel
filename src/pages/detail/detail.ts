import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @Component({
 	selector: 'page-detail',
 	templateUrl: 'detail.html',
 })
 export class DetailPage {

 	_imgs:any[]=['assets/imgs/live-music.jpeg','assets/imgs/live-music.jpeg','assets/imgs/live-music.jpeg','assets/imgs/live-music.jpeg','assets/imgs/live-music.jpeg','assets/imgs/live-music.jpeg'];

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad DetailPage');
 	}

 	public tap: string = "100%";

 	tapEvent(e) {
 		if (this.tap != "1240px") {
 			this.tap = "1240px";
 		}
 		else
 			this.tap = "100%";
 	}
 }
