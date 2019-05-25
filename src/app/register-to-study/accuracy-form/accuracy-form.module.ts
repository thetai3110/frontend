import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule, MatRadioModule, 
          MatDatepickerModule,MatButtonModule, 
          MatInputModule, MatNativeDateModule, 
          MatSelectModule, MatStepperModule, MatTableModule,
          MatSortModule, MatSnackBarModule, MatIconModule, MatChipsModule} from '@angular/material';
import { AccuracyFormComponent } from './accuracy-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountDownModule } from 'src/app/infomation/countdown/countdown.module';

const routes: Routes = [
  {path: '', component: AccuracyFormComponent}
]; 

@NgModule({
  declarations: [AccuracyFormComponent],
  imports: [
    RouterModule.forChild(routes),
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
    MatIconModule,
    MatChipsModule,
    CountDownModule
  ]
})
export class AccuracyModule { }
