import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import {DepartmentDTO} from '../models/department-dto';


@Injectable()
export class LoginService {

  constructor (private http:Http){
  }

token : string;

  doLogin (model){
    let url ="/user/login";
    let header = new Headers ({'Content-type' : 'application/json'});
    return this.http.post(url,JSON.stringify(model) ,{headers:header});
  }
//'Bearer '+token
  sendToken (token){
    let url ="/user/authanticate";
    let header = new Headers ({'authorization' : 'Basic'});
    return this.http.get(url ,{headers:header});
  }
}
