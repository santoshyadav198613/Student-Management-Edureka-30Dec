import { Component } from '@angular/core';

import { StudentService } from './service/student/student.service';
import { LoggerService } from './service/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isVisible: boolean = false; e

  constructor(private studentService: StudentService,
    private loggerService: LoggerService) { }

  addStudent() {
    this.loggerService.log();
    this.studentService.addStudent();
  }
  toggle() {
    this.isVisible = !this.isVisible;
  }
}
