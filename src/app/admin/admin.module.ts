import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

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
import { StudentTableComponent } from './student-manage/student-table/student-table.component';
import { EmployeeTableComponent } from './employee-manage/employee-table/employee-table.component';
import { LecturersTableComponent } from './lecturers-manage/lecturers-table/lecturers-table.component';
import { CourseTableComponent } from './course-manage/course-table/course-table.component';
import { ClassTableComponent } from './class-manage/class-table/class-table.component';

@NgModule({
  declarations: [AdminComponent, NavbarTopComponent, NavbarLeftComponent, CourseManageComponent, ClassManageComponent, EmployeeManageComponent, StudentManageComponent, LecturersManageComponent, InvoiceManageComponent, AccountManageComponent, RoomManageComponent, StudentFormComponent, AccountFormComponent, ClassFormComponent, CourseFormComponent, InvoiceFormComponent, LecturersFormComponent, RoomFormComponent, EmployeeFormComponent, StudentTableComponent, EmployeeTableComponent, LecturersTableComponent, CourseTableComponent, ClassTableComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AdminModule { }
