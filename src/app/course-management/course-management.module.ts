import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import {ShowCourseComponent} from './show-course/show-course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ClassesComponent } from './course-detail/classes/classes.component';
import { CourseService } from '../services/course.service';
import { InfoComponent } from './course-detail/info/info.component';
import { ContentComponent } from './course-detail/content/content.component';
import { SaleComponent } from './course-detail/sale/sale.component';

@NgModule({
  declarations: [ShowCourseComponent, CourseDetailComponent, ClassesComponent, InfoComponent, ContentComponent, SaleComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers : [CourseService],
  exports: [
    ShowCourseComponent
  ]
})
export class CourseManagementModule { }
