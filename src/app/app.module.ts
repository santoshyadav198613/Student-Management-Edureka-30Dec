import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { StudentModule } from './student/student.module';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
// import { StudentComponent } from './student/student.component';
// import { StudentListComponent } from './student/student-list/student-list.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { HeaderComponent } from './header/header.component';

// import { StudentService } from './service/student/student.service';
import { LoggerService } from './service/logger/logger.service';
import { DbloggerService } from './service/logger/dblogger.service';
import { CustomerComponent } from './customer/customer.component';
import { PostsComponent } from './posts/posts.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { ApiinterceptorService } from './httpinterceptor/apiinterceptor.service';
import { LoginComponent } from './login/login.component';

import { LoginService } from './service/login/login.service';
import { AuthGuard } from './service/auth/auth.guard';
import { PostResolveGuard } from './service/posts/post-resolve.guard';
import { PostService } from './service/posts/post.service';
import { PasswordValidatorDirective } from './directive/password-validator.directive';

import { VALUE_CONFIG, VALUE_CONSTANTS } from './service/valueprovider/valueprovider';

import { postFactory } from './service/posts/post-service-factory';

// import {AuthGuard,postFactory, } from './service'

@NgModule({
  declarations: [
    AppComponent,
    // StudentComponent,
    // StudentListComponent,
    DepartmentComponent,
    DepartmentListComponent,
    // HeaderComponent,
    CustomerComponent,
    PostsComponent,
    PostsListComponent,
    PagenotfoundComponent,
    LoginComponent,
    PasswordValidatorDirective
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    SharedModule,
    // StudentModule,
    RoutingModule
    // RouterModule.forRoot([
    //   { path: 'posts', component: PostsComponent },
    //   { path: 'customer', component: CustomerComponent },
    //   { path: 'department', component: DepartmentComponent },
    //   { path: 'student', component: StudentComponent },
    //   { path: '', redirectTo: 'posts', pathMatch: 'full' },
    //   { path: '**', component: PagenotfoundComponent }
    // ])
  ],
  providers: [
    // StudentService
    // { provide: StudentService, useClass: StudentService },
    { provide: LoggerService, useClass: DbloggerService },
    LoginService, AuthGuard, PostResolveGuard, PostService,
    { provide: PostService, useFactory: postFactory, deps: [ HttpClient, LoginService] },
    { provide: VALUE_CONFIG, useValue: VALUE_CONSTANTS },
    { provide: HTTP_INTERCEPTORS, useClass: ApiinterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
