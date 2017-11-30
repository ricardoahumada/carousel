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

 	_imgs:any[]=['assets/imgs/live-music.jpg','assets/imgs/live-music.jpg','assets/imgs/live-music.jpg','assets/imgs/live-music.jpg','assets/imgs/live-music.jpg','assets/imgs/live-music.jpg'];

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad DetailPage');
 	}

 }
