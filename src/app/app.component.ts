import { Component , Inject } from '@angular/core';
import { IValueProvider } from './service/valueprovider/ivalueprovider';
import { VALUE_CONFIG } from './service/valueprovider/valueprovider';
// import { StudentService } from './service/student/student.service';
import { LoggerService } from './service/logger/logger.service';

import { LoginService } from './service/login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isVisible: boolean = false; e

  constructor(
    // private studentService: StudentService,
    private loggerService: LoggerService,
    public loginService: LoginService,
    @Inject(VALUE_CONFIG) private valueConfig:IValueProvider  ) { 

      console.log(this.valueConfig);
    }

  addStudent() {
    this.loggerService.log();
    // this.studentService.addStudent();
  }
  toggle() {
    this.isVisible = !this.isVisible;
  }
}
