import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule, MatRadioModule, 
          MatDatepickerModule,MatButtonModule, 
          MatInputModule, MatNativeDateModule, 
          MatSelectModule, MatStepperModule, MatTableModule,
          MatSortModule, MatSnackBarModule} from '@angular/material';

import { RegisterToStudyComponent } from './register-to-study.component';
import { AccuracyFormComponent } from './accuracy-form/accuracy-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalendarOpenModule } from '../calendar-open/calendar-open.module';
import { InfomationModule } from '../infomation/infomation.module';

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
    MatSnackBarModule,
    FontAwesomeModule,
    InfomationModule
  ]
})
export class RegisterToStudyModule { }
