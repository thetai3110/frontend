import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { NavbarTopComponent } from './layout/navbar-top/navbar-top.component';
import { NavbarLeftComponent } from './layout/navbar-left/navbar-left.component';
import { CourseManageComponent } from './course-manage/course-manage.component';
import { ClassManageComponent } from './class-manage/class-manage.component';
import { EmployeeManageComponent } from './employee-manage/employee-manage.component';
import { StudentManageComponent } from './student-manage/student-manage.component';
import { LecturersManageComponent } from './lecturers-manage/lecturers-manage.component';
import { InvoiceManageComponent } from './invoice-manage/invoice-manage.component';
import { AccountManageComponent } from './account-manage/account-manage.component';
import { RoomManageComponent } from './room-manage/room-manage.component';
import { StudentFormComponent } from './student-manage/student-form/student-form.component';
import { AccountFormComponent } from './account-manage/account-form/account-form.component';
import { ClassFormComponent } from './class-manage/class-form/class-form.component';
import { CourseFormComponent } from './course-manage/course-form/course-form.component';
import { InvoiceFormComponent } from './invoice-manage/invoice-form/invoice-form.component';
import { LecturersFormComponent } from './lecturers-manage/lecturers-form/lecturers-form.component';
import { RoomFormComponent } from './room-manage/room-form/room-form.component';
import { EmployeeFormComponent } from './employee-manage/employee-form/employee-form.component';
import { from } from 'rxjs';
import { StudentTableComponent } from './student-manage/student-table/student-table.component';
import { EmployeeTableComponent } from './employee-manage/employee-table/employee-table.component';
import { LecturersTableComponent } from './lecturers-manage/lecturers-table/lecturers-table.component';

@NgModule({
  declarations: [AdminComponent, NavbarTopComponent, NavbarLeftComponent, CourseManageComponent, ClassManageComponent, EmployeeManageComponent, StudentManageComponent, LecturersManageComponent, InvoiceManageComponent, AccountManageComponent, RoomManageComponent, StudentFormComponent, AccountFormComponent, ClassFormComponent, CourseFormComponent, InvoiceFormComponent, LecturersFormComponent, RoomFormComponent, EmployeeFormComponent, StudentTableComponent, EmployeeTableComponent, LecturersTableComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule
  ]
})
export class AdminModule { }
