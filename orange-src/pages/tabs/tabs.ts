import { Component } from '@angular/core';


import { StorePage } from '../store/store';
import { HomePage } from '../home/home';
import { MinePage} from '../mine/mine';
import { LingganPage} from '../linggan/linggan';
import { JiahaoPage } from '../jiahao/jiahao';
import { ModalController} from 'ionic-angular';
import { AddPage } from '../add/add';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StorePage;
  tab3Root = JiahaoPage;
  tab4Root = LingganPage;
  tab5Root = MinePage;

  constructor(public modalCtrl: ModalController) {

  }
  ionViewDidLoad(){
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let profileModal = this.modalCtrl.create(AddPage);
      profileModal.present();
    },false);
  }
 
}
