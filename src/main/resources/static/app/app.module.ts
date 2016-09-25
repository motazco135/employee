import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent }   from './app.component';


import { PhotoListComponent }  from './components/photo-list.component';
import { SidePanelComponent }  from  './components/side-panel.component';
import { HomeComponent } from './components/home.component';
import {NavBarComponent} from './components/nav-bar.component';
import {DepartmentComponent}  from  './components/department.component';
import {LogingComponent} from './components/login.component';
import {AddEmployeeComponent} from './components/add.employee.component';
import {SearchEmployeeComponent} from './components/search.employee.component';

import { DepartmentService } from './services/department.service';
import { LoginService } from './services/login.service';
import  {EmployeeService}  from './services/employee.service';


import { routing,appRoutingProviders }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule  , routing , FormsModule , HttpModule],
  declarations: [ AppComponent   ,PhotoListComponent,SidePanelComponent,HomeComponent,NavBarComponent ,DepartmentComponent ,
                  LogingComponent , AddEmployeeComponent, SearchEmployeeComponent] ,
  bootstrap:    [ AppComponent ],
  providers: [  appRoutingProviders , DepartmentService , LoginService , EmployeeService]
})
export class AppModule { }
