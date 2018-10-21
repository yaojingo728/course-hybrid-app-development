import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  
  course;
  headers = new HttpHeaders({});
  ngOnInit(){
    // this.http.get('/api/courses/2').subscribe((data)=>{
    //   console.log(data);

    this.http.post('/api',{name:'yaojing',pwd:123},{headers:this.headers}).subscribe((data) => {              
      console.log(data);
      // this.course = data;
    })  
  }

















  // timer = null;
  // ngOnInit() {
  //   this.timer = setInterval(function(){
  //     console.log(11);
  //   },1000);
  // }
  // ngOnDestory(){
  //   clearInterval(this.timer);
  // }
}
