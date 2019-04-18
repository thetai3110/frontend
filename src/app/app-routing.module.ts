import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { CourseDetailComponent} from './course-management/course-detail/course-detail.component';
import { LoginComponent, LogOutComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { CourseManageComponent } from './admin/course-manage/course-manage.component';
import { ClassManageComponent } from './admin/class-manage/class-manage.component';
import { EmployeeManageComponent } from './admin/employee-manage/employee-manage.component';
import { StudentManageComponent } from './admin/student-manage/student-manage.component';
import { LecturersManageComponent } from './admin/lecturers-manage/lecturers-manage.component';
import { RoomManageComponent } from './admin/room-manage/room-manage.component';
import { AccountManageComponent } from './admin/account-manage/account-manage.component';
import { InvoiceManageComponent } from './admin/invoice-manage/invoice-manage.component';
import { RegisterToStudyComponent } from './register-to-study/register-to-study.component';
import { StudentFormComponent } from './admin/student-manage/student-form/student-form.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { CoursesComponent } from './courses/courses.component';
import { CalendarOpenComponent } from './calendar-open/calendar-open.component';
import { ClassByCourseComponent } from './calendar-open/class-by-course/class-by-course.component';
import { ExamCertificateComponent } from './admin/exam-certificate/exam-certificate.component';
import { SearchsComponent } from './searchs/searchs.component';
import { AccuracyFormComponent } from './register-to-study/accuracy-form/accuracy-form.component';
import { InfomationComponent } from './infomation/infomation.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'detail/:id', component: CourseDetailComponent},
  {path: 'courses/:id', component: CoursesComponent},
  {path: 'searchs', component: SearchsComponent},
  {path: 'calendar/:id', component: CalendarOpenComponent},
  {path: 'course/register', component: RegisterToStudyComponent},
  {path: 'course/register/reg/:idClass', component: AccuracyFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogOutComponent},
  {path: 'personal', component: PersonalPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'information/:id', component: InfomationComponent},
  {
    path: 'admin', 
    component: AdminComponent,
    children: [
      {path: 'course-manage', component: CourseManageComponent},
      {path: 'class-manage', component: ClassManageComponent},
      {
        path: 'employee-manage',
        component: EmployeeManageComponent,
        children : [ {path: 'add', component: EmployeeManageComponent} ]
      },
      {
        path: 'student-manage', 
        component: StudentManageComponent,
        children : [ {path: 'add', component: StudentFormComponent} ]
      },
      {path: 'lecturers-manage', component: LecturersManageComponent},
      {path: 'room-manage', component: RoomManageComponent},
      {path: 'account-manage', component: AccountManageComponent},
      {path: 'invoice-manage', component: InvoiceManageComponent},
      {path: 'exam-certificate', component: ExamCertificateComponent}
    ]  
  }
];

@NgModule({
  imports: [FormsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
