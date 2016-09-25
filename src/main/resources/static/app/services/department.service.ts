import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import {DepartmentDTO} from '../models/department-dto';


@Injectable()
export class DepartmentService {

  constructor (private http:Http){
  }

  addDepartment (departmentDTO :DepartmentDTO ){
    let url ="/department/save";
    let header = new Headers ({'Content-type' : 'application/json'});

    return this.http.post(url,JSON.stringify(departmentDTO) ,{headers:header});
  }


  // getHeroes (departmentDTO : DepartmentDTO ): Observable<DepartmentDTO> {
  //     let url ="/employee/api/department/save";
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   let body  = JSON.stringify(departmentDTO);
  //
  //    return this.http.post(this.url ,body  , options)
  //                    .map(this.extractData)
  //                    .catch(this.handleError);
  //  }
  //  private extractData(res: Response) {
  //    let body = res.json();
  //    return body.data || { };
  //  }
  //  private handleError (error: any) {
  //    let errMsg = (error.message) ? error.message :
  //      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //    console.error(errMsg); // log to console instead
  //    return Observable.throw(errMsg);
  //  }

}
//https://www.udemy.com/build-a-web-app-with-spring-boot-and-angular-2/learn/v4/t/lecture/5239260
