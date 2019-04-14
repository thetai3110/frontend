import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CourseManagementModule } from '../course-management/course-management.module';
import { MatTabsModule, MatExpansionModule } from '@angular/material';

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    SharedModule,
    CommonModule,
    CourseManagementModule,
    MatTabsModule,
    RouterModule,
    MatExpansionModule
  ]
})
export class CoursesModule { }
