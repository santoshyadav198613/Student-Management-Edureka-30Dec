import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
  }

  isValid(){
    return false;
  }

}
