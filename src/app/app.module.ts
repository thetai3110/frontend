import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { RegisterModule } from './register/register.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterToStudyModule } from './register-to-study/register-to-study.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
import { StringToNumberPipe } from './pipes/string-to-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StringToNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    AdminModule,
    RegisterModule,
    RegisterToStudyModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  entryComponents:[
    StudentDialogComponent,
    EmployeeDialogComponent, 
    LecturersDialogComponent,
    StudentFormComponent,
    EmployeeFormComponent,
    LecturersFormComponent,
    StudentDeleteComponent,
    EmployeeDeleteComponent,
    LecturersDeleteComponent,
    CourseDialogComponent,
    CourseDeleteComponent,
    CourseFormComponent,
    ClassDeleteComponent,
    ClassDialogComponent,
    ClassFormComponent,
    LessonDialogComponent,
    LessonFormComponent,
    LessonDeleteComponent
  ],
  exports :[StringToNumberPipe],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
