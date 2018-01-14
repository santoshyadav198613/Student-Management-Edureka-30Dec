import { Component, OnInit, DoCheck, ViewChild, 
  AfterViewInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';

import { DepartmentListComponent } from './department-list/department-list.component';

import { DepartmentService } from '../service/department/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [DepartmentService]
})
export class DepartmentComponent implements OnInit, DoCheck, AfterViewInit ,OnDestroy  {

  @ViewChild(DepartmentListComponent)
  departmentList: DepartmentListComponent;

  @ViewChildren(DepartmentListComponent)
  departmentsListComponent: QueryList<DepartmentListComponent>;

  constructor() { }

  ngOnInit() {
    this.departmentList.title = 'Marketing';
    console.log(this.departmentsListComponent);
  }

  ngAfterViewInit(): void {
    console.log('This is after view init');
    this.departmentsListComponent.forEach(
      (departmentListComponent) => {
        setTimeout(() => departmentListComponent.title = "IT", 0)
      }
    )
  }

  ngDoCheck(): void {
    console.log('this is do check event');
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

  ngOnDestroy(): void{
    alert('Are you sure you want to close deaprtment tab');
  }



}
