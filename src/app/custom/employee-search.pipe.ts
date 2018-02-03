import { Pipe, PipeTransform } from '@angular/core';

import { Student } from '../service/student/student';

@Pipe({
  name: 'employeeSearch'
})
export class EmployeeSearchPipe implements PipeTransform {

  transform(empList: Student[], empid: number): any {
    if (empid > 0) {
     return empList.filter((emp) => emp.id === empid);
    }
    return empList;
  }

}
