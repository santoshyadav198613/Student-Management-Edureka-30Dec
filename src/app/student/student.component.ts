import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  // template : `<h1> Student Component </h1>
  // <h1> With multiline html</h1>
  //       `,
  styleUrls: ['./student.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  // styles: ['h1 { background-color: red  }']
})
export class StudentComponent {
  title: string = 'Student Component';
  name: string = 'Kapil';
  isVisible: boolean = false;
  role: string = 'Demo User';
  selectedStudent: Student = new Student();
  studentList: Student[] = [
    { id: 1, name: 'Sudeep', dob: new Date('31-Jan-1987') },
    { id: 2, name: 'Srinivas', dob: new Date('31-Jan-1987') },
    { id: 3, name: 'Jay', dob: new Date('31-Jan-1987') },
    { id: 4, name: 'Roshani', dob: new Date('31-Jan-1987') },
    { id: 5, name: 'Jyoti', dob: new Date('31-Jan-1987') }
  ];
  constructor() { }

  toggle(): void {
    this.isVisible = !this.isVisible;
  }

  readStudent(student: Student) {
    this.selectedStudent = student;
  }
}
