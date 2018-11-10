import { Component } from '@angular/core';

import { StorePage } from '../store/store';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MinePage} from '../mine/mine';
import { LingganPage} from '../linggan/linggan';
import {JiajvPage}from '../jiajv/jiajv';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StorePage;
  tab3Root = ContactPage;
  tab4Root = LingganPage;
  tab5Root = MinePage;

  constructor() {

  }
}
