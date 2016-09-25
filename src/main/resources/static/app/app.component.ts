import { Component } from '@angular/core';
import { PhotoListComponent }  from './components/photo-list.component';
import { SidePanelComponent }  from  './components/side-panel.component';
import { HomeComponent } from './components/home.component';
import {NavBarComponent} from './components/nav-bar.component';

import { Routes, RouterModule } from '@angular/router';
import { routing,appRoutingProviders }  from './app.routing';



@Component({
  selector: 'my-app',
  template:`
           <nav-bar></nav-bar>
           <router-outlet></router-outlet>
           `,
})
export class AppComponent {

 }
