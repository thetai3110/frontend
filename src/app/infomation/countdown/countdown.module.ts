import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatRadioModule, 
         MatDatepickerModule,MatButtonModule, 
         MatInputModule, MatNativeDateModule, 
         MatSelectModule, MatSnackBarModule } from '@angular/material';
import { CountdownComponent } from './countdown.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CountdownComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatRadioModule,
    MatButtonModule,MatInputModule,
    MatSelectModule, MatDatepickerModule, 
    MatSnackBarModule, MatNativeDateModule
  ],
  exports: [CountdownComponent ]
})
export class CountDownModule { }
