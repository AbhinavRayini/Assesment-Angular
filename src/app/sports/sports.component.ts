import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {

  temp1: any;
  date:String='';
  eventname:string=''
  constructor( private router: Router,private http:HttpClient) { }
  ngOnInit(): void {
    this.http.get("http://localhost:3002/events").subscribe(data => {
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

