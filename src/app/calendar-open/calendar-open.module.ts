import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarOpenComponent } from './calendar-open.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatExpansionModule, MatPaginatorModule, MatInputModule,
         MatTableModule, MatSortModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { ClassByCourseComponent } from './class-by-course/class-by-course.component';

const routes: Routes = [
  {path: 'calendar/:id', component: CalendarOpenComponent}
]; 

@NgModule({
  declarations: [CalendarOpenComponent, ClassByCourseComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    MatExpansionModule,
    MatPaginatorModule, 
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [ ClassByCourseComponent ]
})
export class CalendarOpenModule { }
