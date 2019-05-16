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
import { InvoiceManageComponent } from './admin/invoice-manage/invoice-manage.component';
import { RegisterToStudyComponent } from './register-to-study/register-to-study.component';
import { StudentFormComponent } from './admin/student-manage/student-form/student-form.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { CoursesComponent } from './courses/courses.component';
import { CalendarOpenComponent } from './calendar-open/calendar-open.component';
import { ExamCertificateComponent } from './admin/exam-certificate/exam-certificate.component';
import { SearchsComponent } from './searchs/searchs.component';
import { AccuracyFormComponent } from './register-to-study/accuracy-form/accuracy-form.component';
import { InfomationComponent } from './infomation/infomation.component';
import { AcceptComponent } from './admin/class-manage/teaching-assignment/accept/accept.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NewsComponent } from './news/news.component';
import { NewsManageComponent } from './admin/news-manage/news-manage.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { AdminModule } from './admin/admin.module';
import { NewsModule } from './news/news.module';
import { FeedbackModule } from './feedback/feedback.module';
import { CoursesModule } from './courses/courses.module';
import { SearchsModule } from './searchs/searchs.module';
import { CalendarOpenModule } from './calendar-open/calendar-open.module';
import { RegisterToStudyModule } from './register-to-study/register-to-study.module';
import { InfomationModule } from './infomation/infomation.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { CourseManagementModule } from './course-management/course-management.module';

const routes: Routes = [
  { path: '', loadChildren: '../../src/app/home/home.module#HomeModule' },
  { path: 'admin', loadChildren: '../../src/app/admin/admin.module#AdminModule' },
  { path: 'news/:page', loadChildren: '../../src/app/news/news.module#NewsModule' },
  { path: 'feedback/:page', loadChildren: '../../src/app/feedback/feedback.module#FeedbackModule' },
  { path: 'courses/:id', loadChildren: '../../src/app/courses/courses.module#CoursesModule' },
  { path: 'searchs', loadChildren: '../../src/app/searchs/searchs.module#SearchsModule' },
  { path: 'calendar/:id', loadChildren: '../../src/app/calendar-open/calendar-open.module#CalendarOpenModule' },
  { path: 'course/register', loadChildren: '../../src/app/register-to-study/register-to-study.module#RegisterToStudyModule' },
  { path: 'course/register/reg/:idClass', loadChildren: '../app/register-to-study/accuracy-form/accuracy-form.module#AccuracyModule' },
  { path: 'login', loadChildren: '../../src/app/login/login.module#LoginModule' },
  { path: 'infomation/:id', loadChildren: '../../src/app/infomation/infomation.module#InfomationModule' },
  { path: 'home', loadChildren: '../../src/app/home/home.module#HomeModule' },
  { path: 'news-detail/:id', loadChildren: '../app/news/news-detail/news-detail.module#NewsDetailModule'},
  { path: 'search-all/:key/:page', loadChildren: '../app/search-all/search-all.module#SearchAllModule'},
];

@NgModule({
  imports: [
    FormsModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
