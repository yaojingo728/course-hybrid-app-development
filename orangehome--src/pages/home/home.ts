import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JiajvPage } from '../jiajv/jiajv';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  goSub(){
    this.navCtrl.push(JiajvPage);
  }
}
