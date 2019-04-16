import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule, MatRadioModule, 
          MatDatepickerModule,MatButtonModule, 
          MatInputModule, MatNativeDateModule, 
          MatSelectModule, MatStepperModule, MatTableModule,
          MatSortModule, } from '@angular/material';

import { RegisterToStudyComponent } from './register-to-study.component';
import { AccuracyFormComponent } from './accuracy-form/accuracy-form.component';
import { CalendarOpenModule } from '../calendar-open/calendar-open.module';

@NgModule({
  declarations: [RegisterToStudyComponent, AccuracyFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    RouterModule,
    SharedModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class RegisterToStudyModule { }
