import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule, MatRadioModule,
         MatButtonModule,MatInputModule,
         MatSelectModule, MatIconModule, MatSnackBarModule } from '@angular/material';

import { LoginComponent, LogOutComponent } from './login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogOutComponent}
];

@NgModule({
  declarations: [LoginComponent, LogOutComponent],
  imports: [
    RouterModule.forChild(routes),
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
