import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

// import { StudentComponent } from '../student/student.component';
import { DepartmentComponent } from '../department/department.component';
import { PostsComponent } from '../posts/posts.component';
import { CustomerComponent } from '../customer/customer.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';

import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../service/auth/auth.guard';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot([
      { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
      { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },
      { path: 'department', component: DepartmentComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      // { path: 'student', component: StudentComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
