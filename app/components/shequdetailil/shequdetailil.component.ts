import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shequdetailil',
  templateUrl: './shequdetailil.component.html',
  styleUrls: ['./shequdetailil.component.css']
})
export class ShequdetaililComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  shequId:number;
  shequ;
  ngOnInit() {
    this.shequId = this.router.snapshot.params['shequId'];
    this.http.get('/api/shequs/'+this.shequId).subscribe(data=>{
      this.shequ=data;
    });
  }

}
