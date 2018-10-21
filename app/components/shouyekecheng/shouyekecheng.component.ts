import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-shouyekecheng',
  templateUrl: './shouyekecheng.component.html',
  styleUrls: ['./shouyekecheng.component.css']
})
export class ShouyekechengComponent implements OnInit {

    constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
    lessonId:number;
    lessons;
    ngOnInit() {
      this.http.get('/api/lessons').subscribe(data=>{
        this.lessons = data;
      });
    }
}
