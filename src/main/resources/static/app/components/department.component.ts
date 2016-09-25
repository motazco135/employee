import { Component }  from '@angular/core';
import { DepartmentDTO } from '../models/department-dto';
import { DepartmentService } from '../services/department.service';

@Component  ({
  selector : 'department',
  templateUrl : 'app/components/department.component.html'

})

export class  DepartmentComponent{
department = new  DepartmentDTO (  '' , '', '' ) ;
isRegisterd = false;

constructor (private departmentService : DepartmentService ){}

//function to reate new departmen
 addDepartment (){
   console.log("model-based form submitted");
   this.departmentService.addDepartment(this.department).subscribe(
     date=>{
          this.isRegisterd = true;
          this.department = new  DepartmentDTO (  '' , '', '' ) ;
     },
     error => {
       alert('Please try one more time ...');
       console.log('error ');
     }

   );
 }
//
// rturnedDepartment : DepartmentDTO ;
// errorMessage: any;
//  getHeroes() {
//   this.departmentService.getHeroes(this.department )
//                    .subscribe(
//                      rturnedDepartment => this.department = rturnedDepartment,
//                      error =>  this.errorMessage = <any>error);
//                    }

}
