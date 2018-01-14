import { Component, OnInit, SkipSelf } from '@angular/core';

import { Department } from '../../service/department/department';
import { DepartmentService } from '../../service/department/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  title: string;
  departmentList: Department[];
  constructor(@SkipSelf() private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departmentList = this.departmentService.getDepartments();
  }

  isValid() {
    return false;
  }

}
