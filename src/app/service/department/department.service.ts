import { Injectable } from '@angular/core';

import { Department } from './department';

@Injectable()
export class DepartmentService {
  departmentList: Department[] = [];
  constructor() { }

  getDepartments(): Department[] {
    this.departmentList.push(
      { id: 1, name: 'Marketing', head: 'Sudeep', count: 100 },
      { id: 2, name: 'IT', head: 'Jyoti', count: 200 },
      { id: 3, name: 'Finance', head: 'Jay', count: 50 },
      { id: 4, name: 'Operations', head: 'Pramod', count: 50 }
    );

    return this.departmentList;

  }

}
