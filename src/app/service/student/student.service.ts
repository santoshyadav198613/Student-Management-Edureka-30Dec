import { Injectable } from '@angular/core';

import { Student } from './student';

@Injectable()
export class StudentService {
  studentList: Student[] = [];
  constructor() {

    console.log('This is student service');
   }

  getStudents(): Student[] {
    this.studentList.push(
      { id: 1, name: 'Sudeep', dob: new Date('31-Jan-1987') },
      { id: 2, name: 'Srinivas', dob: new Date('31-Jan-1987') },
      { id: 3, name: 'Jay', dob: new Date('31-Jan-1987') },
      { id: 4, name: 'Roshani', dob: new Date('31-Jan-1987') },
      { id: 5, name: 'Jyoti', dob: new Date('31-Jan-1987') }
    );

    return this.studentList;
  }

  addStudent(): void {
    let student = { id: 6, name: 'Varun', dob: new Date('31-Jan-1990') };
    this.studentList.push(student);
  }
}
