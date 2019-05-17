import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule, MatRadioModule,
         MatButtonModule,MatInputModule,
         MatSelectModule, MatIconModule, MatSnackBarModule } from '@angular/material';

import { LoginComponent, LogOutComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent, LogOutComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    MatFormFieldModule, 
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatSnackBarModule
  ]
})

export class LoginModule { }
