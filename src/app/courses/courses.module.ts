import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CourseManagementModule } from '../course-management/course-management.module';
import { MatTabsModule, MatExpansionModule } from '@angular/material';

const routes: Routes = [
  {path: 'courses/:id', component: CoursesComponent},
]; 

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    CourseManagementModule,
    MatTabsModule,
    RouterModule,
    MatExpansionModule
  ]
})
export class CoursesModule { }
