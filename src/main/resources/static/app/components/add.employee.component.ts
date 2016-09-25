import { Component }  from '@angular/core';
import { EmployeeDTO } from '../models/employee-dto';
import { EmployeeService } from '../services/employee.service';
@Component  ({
  selector : 'search-employee',
  templateUrl : 'app/components/add.employee.component.html'

})

export class  AddEmployeeComponent{
  employeeDTO = new  EmployeeDTO () ;
  isRegisterd = false;
  constructor (private employeeService : EmployeeService ){}
  createdEmployeeID : any ;

  //function to reate new departmen
   addEmployee (){
     console.log("model-based form submitted");
     console.log(""+ this.employeeDTO);
     this.employeeService.addEmployee(this.employeeDTO).subscribe(
       data=>{
            let body = data.json();
            this.createdEmployeeID =body.id;
            this.isRegisterd = true;
            this.employeeDTO = new  EmployeeDTO () ;
       },
       error => {
         alert('Please try one more time ...');
         console.log('error ');
       }

     );
   }

}
