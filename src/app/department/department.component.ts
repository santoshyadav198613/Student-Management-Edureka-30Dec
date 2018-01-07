import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';

import { DepartmentListComponent } from './department-list/department-list.component';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  @ViewChild(DepartmentListComponent)
  departmentList: DepartmentListComponent;

  @ViewChildren(DepartmentListComponent)
  departmentsListComponent: QueryList<DepartmentListComponent>;

  constructor() { }

  ngOnInit() {

  }

  setDepartment() {
    this.departmentList.title = 'Marketing';
    console.log(this.departmentsListComponent);
    this.departmentsListComponent.forEach(
      (departmentListComponent) => {
        departmentListComponent.title = "IT";
      }
    )
    // this.departmentList.isValid();
  }



}
