import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentComponent } from './components/department.component';
import {HomeComponent} from './components/home.component';
import {LogingComponent} from './components/login.component';
import {AddEmployeeComponent} from './components/add.employee.component';
import {SearchEmployeeComponent}  from './components/search.employee.component';

const appRoutes: Routes = [
  { path: 'add-department', component: DepartmentComponent },
  { path: 'home', component: HomeComponent  },
  { path: '', component: HomeComponent  },
  { path: 'login' , component :LogingComponent},
  {path : 'add-Employee' ,  component :AddEmployeeComponent } ,
  {path : 'search-employee' ,  component :SearchEmployeeComponent }

//  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
