import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import {EmployeeDTO} from '../models/employee-dto';

@Injectable()
export class EmployeeService {

  constructor (private http:Http){
  }

  addEmployee (employeeDTO :EmployeeDTO ){
    let url ="/employee/save";
    let header = new Headers ({'Content-type' : 'application/json'});
    return this.http.post(url,JSON.stringify(employeeDTO) ,{headers:header});
  }

  searchEmployeeByName (employeeName :string ){
    let url ="/employee/search?empname="+employeeName;
    let header = new Headers ({'Content-type' : 'application/json'});
    //return this.http.get(url,JSON.stringify(employeeDTO) ,{headers:header});
    return this.http.get(url,{headers:header});
  }

//delete
deleteEmployee(empolyeeID :number ){
  let url ="/employee/delete/"+empolyeeID;
  let header = new Headers ({'Content-type' : 'application/json' , 'Accept': 'application/json'});;
  return this.http.delete( url , header );
  }
}
