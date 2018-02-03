import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NamePipe } from '../custom/name.pipe';
import { HeaderComponent } from '../header/header.component';
import { EmployeeSearchPipe } from '../custom/employee-search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [HeaderComponent,NamePipe,EmployeeSearchPipe],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderComponent,
    NamePipe,
    EmployeeSearchPipe
  ]
})
export class SharedModule { }
