import { Injectable } from '@angular/core';

import { Student } from './student';

@Injectable()
export class StudentService {
  studentList: Student[] = [{ id: 1, name: 'Sudeep', dob: new Date('31-Jan-1987'), email: 'test@test.com' },
  { id: 2, name: 'Srinivas', dob: new Date('31-Jan-1987'), email: 'test@test.com' },
  { id: 3, name: 'Jay', dob: new Date('31-Jan-1987'), email: 'test@test.com' },
  { id: 4, name: 'Roshani', dob: new Date('31-Jan-1987'), email: 'test@test.com' },
  { id: 5, name: 'Jyoti', dob: new Date('31-Jan-1987'), email: 'test@test.com' }];
  constructor() {

    console.log('This is student service');
  }

  getStudents(): Student[] {
    return this.studentList;
  }

  addStudent(): void {
    let student = { id: 6, name: 'Varun', dob: new Date('31-Jan-1990'), email: 'test@test.com' };
    this.studentList.push(student);
  }

  addStud(student: Student): void {
    this.studentList.push(student);
  }
}
