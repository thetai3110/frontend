import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {CourseManagementModule} from '../course-management/course-management.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    CourseManagementModule
  ]
})
export class HomeModule { }
