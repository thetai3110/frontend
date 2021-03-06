import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfomationComponent } from './infomation.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatRadioModule, 
         MatDatepickerModule,MatButtonModule, 
         MatInputModule, MatNativeDateModule, 
         MatSelectModule, MatSnackBarModule } from '@angular/material';
import { CountDownModule } from './countdown/countdown.module';

const routes: Routes = [
  {path: '', component: InfomationComponent}
]; 

@NgModule({
  declarations: [InfomationComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    RouterModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatRadioModule,
    MatButtonModule,MatInputModule,
    MatSelectModule, MatDatepickerModule, 
    MatSnackBarModule, MatNativeDateModule,
    CountDownModule
  ],
  exports: [ InfomationComponent ]
})
export class InfomationModule { }
