import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatDialogModule, MatNativeDateModule,
        MatPaginatorModule, MatTableModule, MatSortModule,
        MatFormFieldModule, MatDatepickerModule, MatRadioModule,
        MatButtonModule, MatSelectModule, MatMenuModule,
        MatIconModule, MatExpansionModule, MatCheckboxModule,
        MatTabsModule, MatSnackBarModule, MatTooltipModule} from '@angular/material';

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
import { StudentDialogComponent } from './student-manage/student-dialog/student-dialog.component';
import { LecturersDialogComponent } from './lecturers-manage/lecturers-dialog/lecturers-dialog.component';
import { EmployeeDialogComponent } from './employee-manage/employee-dialog/employee-dialog.component';
import { StudentDeleteComponent } from './student-manage/student-delete/student-delete.component';
import { EmployeeDeleteComponent } from './employee-manage/employee-delete/employee-delete.component';
import { LecturersDeleteComponent } from './lecturers-manage/lecturers-delete/lecturers-delete.component';
import { CourseDialogComponent } from './course-manage/course-dialog/course-dialog.component';
import { CourseDeleteComponent } from './course-manage/course-delete/course-delete.component';
import { ClassDialogComponent } from './class-manage/class-dialog/class-dialog.component';
import { ClassDeleteComponent } from './class-manage/class-delete/class-delete.component';
import { ClassStudentComponent } from './class-manage/class-student/class-student.component';
import { LessonFormComponent } from './course-manage/course-lesson/lesson-form/lesson-form.component';
import { LessonDialogComponent } from './course-manage/course-lesson/lesson-dialog/lesson-dialog.component';
import { LessonDeleteComponent } from './course-manage/course-lesson/lesson-delete/lesson-delete.component';
import { LessonTableComponent } from './course-manage/course-lesson/lesson-table/lesson-table.component';
import { AccountTableComponent } from './account-manage/account-table/account-table.component';
import { AccountDialogComponent } from './account-manage/account-dialog/account-dialog.component';
import { AccountDeleteComponent } from './account-manage/account-delete/account-delete.component';
import { AccountPermissionComponent } from './account-manage/account-permission/account-permission.component';
import { InvoiceTableComponent } from './invoice-manage/invoice-table/invoice-table.component';
import { InvoiceDialogComponent } from './invoice-manage/invoice-dialog/invoice-dialog.component';
import { InvoiceDeleteComponent } from './invoice-manage/invoice-delete/invoice-delete.component';
import { ExamCertificateComponent } from './exam-certificate/exam-certificate.component';
import { ExamTableComponent } from './exam-certificate/exam/exam-table/exam-table.component';
import { ExamFormComponent } from './exam-certificate/exam/exam-form/exam-form.component';
import { ExamDialogComponent } from './exam-certificate/exam/exam-dialog/exam-dialog.component';
import { ExamDeleteComponent } from './exam-certificate/exam/exam-delete/exam-delete.component';
import { CertificateTableComponent } from './exam-certificate/certificate/certificate-table/certificate-table.component';
import { CertificateFormComponent } from './exam-certificate/certificate/certificate-form/certificate-form.component';
import { CertificateDialogComponent } from './exam-certificate/certificate/certificate-dialog/certificate-dialog.component';
import { CertificateDeleteComponent } from './exam-certificate/certificate/certificate-delete/certificate-delete.component';
import { RoomDialogComponent } from './room-manage/room-dialog/room-dialog.component';
import { RoomDeleteComponent } from './room-manage/room-delete/room-delete.component';
import { RoomCalenderComponent } from './room-manage/room-calender/room-calender.component';
import { RoomTableComponent } from './room-manage/room-table/room-table.component';
import { InvoiceDetailComponent } from './invoice-manage/invoice-detail/invoice-detail.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderNavigationComponent } from './layout/header-navigation/header-navigation.component';

@NgModule({
  declarations: [
    AdminComponent,
    NavbarTopComponent,
    NavbarLeftComponent,
    CourseManageComponent,
    ClassManageComponent,
    EmployeeManageComponent,
    StudentManageComponent,
    LecturersManageComponent,
    InvoiceManageComponent,
    AccountManageComponent,
    RoomManageComponent,
    StudentFormComponent,
    AccountFormComponent,
    ClassFormComponent,
    CourseFormComponent,
    InvoiceFormComponent,
    LecturersFormComponent,
    RoomFormComponent,
    EmployeeFormComponent,
    StudentTableComponent,
    EmployeeTableComponent,
    LecturersTableComponent,
    CourseTableComponent,
    ClassTableComponent,
    StudentDialogComponent,
    LecturersDialogComponent,
    EmployeeDialogComponent,
    StudentDeleteComponent,
    EmployeeDeleteComponent,
    LecturersDeleteComponent,
    CourseDialogComponent,
    CourseDeleteComponent,
    ClassDialogComponent,
    ClassDeleteComponent,
    ClassStudentComponent,
    LessonFormComponent,
    LessonDialogComponent,
    LessonDeleteComponent,
    LessonTableComponent,
    AccountTableComponent,
    AccountDialogComponent,
    AccountDeleteComponent,
    AccountPermissionComponent,
    InvoiceTableComponent,
    InvoiceDialogComponent,
    InvoiceDeleteComponent,
    ExamCertificateComponent,
    ExamTableComponent,
    ExamFormComponent,
    ExamDialogComponent,
    ExamDeleteComponent,
    CertificateTableComponent,
    CertificateFormComponent,
    CertificateDialogComponent,
    CertificateDeleteComponent,
    RoomDialogComponent,
    RoomDeleteComponent,
    RoomCalenderComponent,
    RoomTableComponent,
    InvoiceDetailComponent,
    SidebarComponent,
    HeaderNavigationComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTooltipModule
  ]
})
export class AdminModule { }
