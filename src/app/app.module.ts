import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { PersonalPageModule } from './personal-page/personal-page.module'; 
import { RegisterModule } from './register/register.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterToStudyModule } from './register-to-study/register-to-study.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseManagementModule } from './course-management/course-management.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDialogComponent } from './admin/student-manage/student-dialog/student-dialog.component';
import { EmployeeDialogComponent } from './admin/employee-manage/employee-dialog/employee-dialog.component';
import { LecturersDialogComponent } from './admin/lecturers-manage/lecturers-dialog/lecturers-dialog.component';
import { StudentFormComponent } from './admin/student-manage/student-form/student-form.component';
import { EmployeeFormComponent } from './admin/employee-manage/employee-form/employee-form.component';
import { LecturersFormComponent } from './admin/lecturers-manage/lecturers-form/lecturers-form.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StudentDeleteComponent } from './admin/student-manage/student-delete/student-delete.component';
import { EmployeeDeleteComponent } from './admin/employee-manage/employee-delete/employee-delete.component';
import { LecturersDeleteComponent } from './admin/lecturers-manage/lecturers-delete/lecturers-delete.component';
import { CourseDialogComponent } from './admin/course-manage/course-dialog/course-dialog.component';
import { CourseDeleteComponent } from './admin/course-manage/course-delete/course-delete.component';
import { CourseFormComponent } from './admin/course-manage/course-form/course-form.component';
import { ClassDeleteComponent } from './admin/class-manage/class-delete/class-delete.component';
import { ClassDialogComponent } from './admin/class-manage/class-dialog/class-dialog.component';
import { ClassFormComponent } from './admin/class-manage/class-form/class-form.component';
import { LessonDialogComponent } from './admin/course-manage/course-lesson/lesson-dialog/lesson-dialog.component';
import { LessonFormComponent } from './admin/course-manage/course-lesson/lesson-form/lesson-form.component';
import { LessonDeleteComponent } from './admin/course-manage/course-lesson/lesson-delete/lesson-delete.component';
import { AccuracyFormComponent } from './register-to-study/accuracy-form/accuracy-form.component';
import { SharedModule } from './shared/shared.module';
import { AccountDeleteComponent } from './admin/account-manage/account-delete/account-delete.component';
import { AccountFormComponent } from './admin/account-manage/account-form/account-form.component';
import { AccountDialogComponent } from './admin/account-manage/account-dialog/account-dialog.component';
import { PersonalDialogComponent } from './personal-page/personal-dialog/personal-dialog.component';
import { InvoiceDeleteComponent } from './admin/invoice-manage/invoice-delete/invoice-delete.component';
import { InvoiceDialogComponent } from './admin/invoice-manage/invoice-dialog/invoice-dialog.component';
import { InvoiceFormComponent } from './admin/invoice-manage/invoice-form/invoice-form.component';
import { StudentTableComponent } from './admin/student-manage/student-table/student-table.component';
import { CoursesModule } from './courses/courses.module';
import { SearchsModule } from './searchs/searchs.module';
import { CalendarOpenModule } from './calendar-open/calendar-open.module';
import { InfomationModule } from './infomation/infomation.module';

import { ExamFormComponent } from './admin/exam-certificate/exam/exam-form/exam-form.component';
import { ExamDialogComponent } from './admin/exam-certificate/exam/exam-dialog/exam-dialog.component';
import { ExamDeleteComponent } from './admin/exam-certificate/exam/exam-delete/exam-delete.component';
import { CertificateFormComponent } from './admin/exam-certificate/certificate/certificate-form/certificate-form.component';
import { CertificateDialogComponent } from './admin/exam-certificate/certificate/certificate-dialog/certificate-dialog.component';
import { CertificateDeleteComponent } from './admin/exam-certificate/certificate/certificate-delete/certificate-delete.component';
import { RoomDialogComponent } from './admin/room-manage/room-dialog/room-dialog.component';
import { RoomDeleteComponent } from './admin/room-manage/room-delete/room-delete.component';
import { RoomFormComponent } from './admin/room-manage/room-form/room-form.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    AdminModule,
    PersonalPageModule,
    SharedModule,
    CoursesModule,
    SearchsModule,
    CourseManagementModule,
    RegisterModule,
    RegisterToStudyModule,
    CalendarOpenModule,
    InfomationModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  entryComponents:[
    StudentDialogComponent, StudentFormComponent, StudentDeleteComponent, StudentTableComponent,
    EmployeeDialogComponent, EmployeeDeleteComponent, EmployeeFormComponent,
    LecturersFormComponent, LecturersDeleteComponent, LecturersDialogComponent,
    CourseDialogComponent, CourseDeleteComponent, CourseFormComponent,
    ClassDeleteComponent, ClassDialogComponent, ClassFormComponent,
    LessonDialogComponent, LessonFormComponent ,LessonDeleteComponent,
    AccountDeleteComponent, AccountFormComponent, AccountDialogComponent,
    PersonalDialogComponent,
    InvoiceDeleteComponent, InvoiceDialogComponent, InvoiceFormComponent,
    ExamFormComponent, ExamDialogComponent, ExamDeleteComponent,
    CertificateFormComponent, CertificateDialogComponent, CertificateDeleteComponent,
    RoomDialogComponent, RoomDeleteComponent, RoomFormComponent
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
