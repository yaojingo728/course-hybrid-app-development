import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isActive=0;
  change(i){
    this.isActive=i;
  }

  constructor(public navCtrl: NavController) {
    
  }

  
  
}
