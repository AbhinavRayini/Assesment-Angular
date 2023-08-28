import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcertsComponent } from './concerts/concerts.component';
import { OutputComponent } from './output/output.component';
import { SportsComponent } from './sports/sports.component';
import { Selection1Component } from './selection1/selection1.component';
import { HeaderComponent } from './header/header.component';
import { Selection11Component } from './selection11/selection11.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",component:LoginComponent , pathMatch:"full"},
  {path:"header",component:HeaderComponent },

  {path: "concerts",component: ConcertsComponent},
  {path:"selection", component: Selection11Component},
  {path:'output',component:OutputComponent},
  {path:'sports', component:SportsComponent},
  {path:'selection1',component:Selection1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
