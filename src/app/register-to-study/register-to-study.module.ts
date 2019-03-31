import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule, MatRadioModule, 
          MatDatepickerModule,MatButtonModule, 
          MatInputModule, MatNativeDateModule, 
          MatSelectModule } from '@angular/material';

import { RegisterToStudyComponent } from './register-to-study.component';

@NgModule({
  declarations: [RegisterToStudyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    RouterModule,
    SharedModule
  ]
})
export class RegisterToStudyModule { }
