import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CourseManagementModule } from '../course-management/course-management.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home.component';
import { EducationComponent } from './education/education.component';
import { CommonComponent } from './common/common.component';

const routes: Routes = [
  {path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent, EducationComponent, CommonComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    CourseManagementModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class HomeModule { }
