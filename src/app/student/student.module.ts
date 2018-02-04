import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StudentComponent } from './student.component';
import { StudentListComponent } from './student-list/student-list.component';

import { SharedModule } from '../shared/shared.module';


// import { StudentService } from '../service/student/student.service';
import { StudentDetailsComponent } from './student-details/student-details.component';
// import { AuthGuard } from '../service/auth/auth.guard';

import { AuthGuard, StudentService } from '../service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: StudentComponent, canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
          { path: ':id', component: StudentDetailsComponent }
        ]
      },

    ])
  ],
  declarations: [StudentComponent,
    StudentListComponent,
    StudentDetailsComponent],
  providers: [
    { provide: StudentService, useClass: StudentService }
  ]
})
export class StudentModule { }
