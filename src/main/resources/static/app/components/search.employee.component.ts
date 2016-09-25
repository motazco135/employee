import { Component }  from '@angular/core';
import { EmployeeDTO } from '../models/employee-dto';
import { EmployeeService } from '../services/employee.service';

@Component  ({
  selector : 'search-employee',
  templateUrl : 'app/components/search.employee.component.html'

})

export class  SearchEmployeeComponent{
  employeeDTO = new  EmployeeDTO () ;
  isFound = false;
  returnrdEmployeeList :any []   ;
    constructor (private employeeService : EmployeeService ){}

    searchEmployee(){
      console.log("model-based form submitted");
      console.log(""+ this.employeeDTO);
      if( !this.employeeDTO.name){
        alert('name is empty ...');
        return  ;
      }
      this.employeeService.searchEmployeeByName(this.employeeDTO.name).subscribe(
        data=>{
             let body  = data.json();
             this.returnrdEmployeeList  = body ;
             if(!this.returnrdEmployeeList || this.returnrdEmployeeList.length > 0){
               this.isFound = true ;
             }
        },
        error => {
          alert('Please try one more time ...');
          console.log('error ');
        }

      );
    }

    delete(empId : number){
      this.employeeService.deleteEmployee(empId).subscribe(
        data=>{
             this.searchEmployee();
        },
        error=>{

        }
      );
    }
}
