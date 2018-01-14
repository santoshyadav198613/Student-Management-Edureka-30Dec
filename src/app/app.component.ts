import { Component } from '@angular/core';

import { StudentService } from './service/student/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isVisible: boolean = false; e

  constructor(private studentService: StudentService) { }

  addStudent() {
    this.studentService.addStudent();
  }
  toggle() {
    this.isVisible = !this.isVisible;
  }
}
