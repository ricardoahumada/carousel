import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	_imgs:any[]=['assets/imgs/live-music.jpg','assets/imgs/live-music.jpg','assets/imgs/live-music.jpg','assets/imgs/live-music.jpg','assets/imgs/live-music.jpg','assets/imgs/live-music.jpg'];

	constructor(public navCtrl: NavController) {

	}

	goToDetailPage(){
		this.navCtrl.push(DetailPage);
	}

}
