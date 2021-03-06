import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule, MatRadioModule, 
          MatDatepickerModule,MatButtonModule, 
          MatInputModule, MatNativeDateModule, 
          MatSelectModule, MatStepperModule, MatTableModule,
          MatSortModule, MatSnackBarModule, MatIconModule, MatChipsModule} from '@angular/material';

import { RegisterToStudyComponent } from './register-to-study.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {path: '', component: RegisterToStudyComponent},
]; 

@NgModule({
  declarations: [RegisterToStudyComponent],
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
    MatChipsModule
  ]
})
export class RegisterToStudyModule { }
