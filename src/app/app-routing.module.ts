import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { LoginComponent, LogOutComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

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
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogOutComponent },
  { path: 'resetpass', component: RegisterComponent },
  { path: 'resetpass', component: RegisterComponent },
  { path: 'class/teaching-assignment/:id/:idLec', loadChildren: '../app/admin/class-manage/teaching-assignment/accept/accept.module#AcceptModule' },
  { path: 'home', loadChildren: '../../src/app/home/home.module#HomeModule' },
  { path: 'news-detail/:id', loadChildren: '../app/news/news-detail/news-detail.module#NewsDetailModule'},
  { path: 'search-all/:key/:page', loadChildren: '../app/search-all/search-all.module#SearchAllModule'},
];

@NgModule({
  imports: [
    FormsModule,RouterModule.forRoot(routes),
    LoginModule,
    RegisterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
