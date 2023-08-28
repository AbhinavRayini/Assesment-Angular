import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { OutputComponent } from './output/output.component';
import { SportsComponent } from './sports/sports.component';
import { Selection1Component } from './selection1/selection1.component';
import { Selection11Component } from './selection11/selection11.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcertsComponent,
    FilterPipe,
    HeaderComponent,
    OutputComponent,
    SportsComponent,
    Selection1Component,
    Selection11Component,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
