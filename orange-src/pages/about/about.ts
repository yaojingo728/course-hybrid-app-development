import { Component, ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides:Slides;
  constructor(public navCtrl: NavController) {
    //console.log(this.slides.getActiveIndex);
  }
  // ionViewDidLoad() {
  //   //console.log(this.slides.getActiveIndex);
  // }
  change(){
    // console.log(this.slides.getActiveIndex);
  }
}
