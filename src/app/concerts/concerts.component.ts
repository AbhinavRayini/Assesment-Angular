import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent {
  temp1: any;
  date:String='';
  eventname:string=''
  constructor( private router: Router,private http:HttpClient) { }
  ngOnInit(): void {
    this.http.get("http://localhost:3000/events").subscribe(data => {
      this.temp1=data;
    });
  }
  searchByDate(){

  if (this.date != "") {
    this.temp1 = this.temp1.filter((res: any) => {
      return res.date.toLowerCase().match(this.date.toLowerCase());

    })
  }

  else if (this.date = "") {

    this.temp1 = this.temp1.filter((res: any) => {
      return res.date.toLowerCase().match(this.date.toLowerCase());

    });
  }
  
  else {

     this.ngOnInit();

  }
}
searchByEvent(){

  if (this.eventname != "") {
    this.temp1 = this.temp1.filter((res: any) => {
      return res.eventname.toLowerCase().match(this.eventname.toLowerCase());

    })
  }

  else if (this.eventname = "") {

    this.temp1 = this.temp1.filter((res: any) => {
      return res.eventname.toLowerCase().match(this.eventname.toLowerCase());

    });
  }
  
  else {

     this.ngOnInit();

  }
}

}
