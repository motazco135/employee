import { DepartmentDTO } from '../models/department-dto';

export class EmployeeDTO {
  public name: string ;
  public email: string;
  public mobile: string;
  public department :  DepartmentDTO  ;
  constructor() {  }
}
