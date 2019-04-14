import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CourseManagementModule } from '../course-management/course-management.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [HomeComponent, EducationComponent],
  imports: [
    CommonModule,
    SharedModule,
    CourseManagementModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class HomeModule { }
