import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

// import { StudentComponent } from '../student/student.component';
import { DepartmentComponent } from '../department/department.component';
import { PostsComponent } from '../posts/posts.component';
import { CustomerComponent } from '../customer/customer.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot([
      { path: 'posts', component: PostsComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'department', component: DepartmentComponent },
      // { path: 'student', component: StudentComponent },
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
