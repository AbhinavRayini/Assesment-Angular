import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 constructor(private router : Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  email: string | undefined;
  password: string | undefined;
err:any;
  login() {
    if (this.email === 'admin' && this.password === 'admin') {
      this.router.navigateByUrl('/header');
    } else {
              this.err='Enter Correct Details';
              this.router.navigateByUrl('/login');
    }
  }
  
}