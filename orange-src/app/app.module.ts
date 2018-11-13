import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MinePage } from '../pages/mine/mine';
import { BPage } from '../pages/b/b';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { LingganPage } from '../pages/linggan/linggan';
import { StorePage } from '../pages/store/store';
import { AddPage } from '../pages/add/add';
import { JiahaoPage } from '../pages/jiahao/jiahao';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    MinePage,
    BPage,
    LingganPage,
    StorePage,
    AddPage,
    JiahaoPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Back',
      tabsHideOnSubPages:true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    MinePage,
    BPage,
    LingganPage,
    StorePage,
    AddPage,
    JiahaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
