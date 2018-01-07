import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  @Input() students: Student[];
  @Output() selectedStudent: EventEmitter<Student> = new EventEmitter<Student>();
  constructor() { }

  ngOnInit() {
  }

  select(student: Student) {
    console.log(student);
    this.selectedStudent.emit(student);
  }
}
