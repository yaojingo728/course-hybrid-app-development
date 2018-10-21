import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CommonService } from './services/common.service';
import { Common2Service } from './services/common2.service';
import {RouterModule,Router} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import {HttpClientModule} from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { QieshuoComponent } from './components/qieshuo/qieshuo.component';
import { TongzhiComponent } from './components/tongzhi/tongzhi.component';
import { FinishedComponent } from './components/finished/finished.component';
import { CheckedComponent } from './components/checked/checked.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShequdetaililComponent } from './components/shequdetailil/shequdetailil.component';
import { TongzhizanComponent } from './components/tongzhizan/tongzhizan.component';
import { TongzhipinglunComponent } from './components/tongzhipinglun/tongzhipinglun.component';
import { ShouyetongbuComponent } from './components/shouyetongbu/shouyetongbu.component';
import { ShouyekechengComponent } from './components/shouyekecheng/shouyekecheng.component';
import { KechengkanComponent } from './components/kechengkan/kechengkan.component';
import { KechengzhuComponent } from './components/kechengzhu/kechengzhu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbudetailComponent,
    TodolistComponent,
    CoursedetailComponent,
    QieshuoComponent,
    TongzhiComponent,
    FinishedComponent,
    CheckedComponent,
    FooterComponent,
    ShequdetaililComponent,
    TongzhizanComponent,
    TongzhipinglunComponent,
    ShouyetongbuComponent,
    ShouyekechengComponent,
    KechengkanComponent,
    KechengzhuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'home/checked',component:CheckedComponent},
      {path:'home/finished',component:FinishedComponent},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbudetailComponent},
      {path:'course',component:CourseComponent},
      {path:'course/:lessonId',component:CoursedetailComponent},
      {path:'qieshuo',component:QieshuoComponent},
      {path:'tongzhi',component:TongzhiComponent},
      {path:'tongzhi/tongzhizan',component:TongzhizanComponent},
      {path:'tongzhi/tongzhipinglun',component:TongzhipinglunComponent},
      {path:'shequ',component:ShequComponent},
      {path:'shequ/:shequId',component:ShequdetaililComponent},
      {path:'shouyetongbu',component:ShouyetongbuComponent},
      {path:'kechengkan',component:KechengkanComponent},
      {path:'kechengzhu',component:KechengzhuComponent},
      {path:'shouyekecheng',component:ShouyekechengComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:HomeComponent}
    ]),
    HttpClientModule
  ],
  providers: [{provide:Common2Service,useClass:Common2Service}],
  bootstrap: [AppComponent]
})
export class AppModule { }
