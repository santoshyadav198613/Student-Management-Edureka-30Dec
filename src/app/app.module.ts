import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { HeaderComponent } from './header/header.component';

import { StudentService } from './service/student/student.service';
import { LoggerService } from './service/logger/logger.service';
import { DbloggerService } from './service/logger/dblogger.service';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent,
    DepartmentComponent,
    DepartmentListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // StudentService
    { provide: StudentService, useClass: StudentService },
    { provide: LoggerService, useClass: DbloggerService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
