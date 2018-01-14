import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

import { Student } from '../../service/student/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnChanges {
  @Input() students: Student[];
  @Output() selectedStudent: EventEmitter<Student> = new EventEmitter<Student>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }
  ngOnInit() {
  }

  select(student: Student) {
    console.log(student);
    this.selectedStudent.emit(student);
  }
}
