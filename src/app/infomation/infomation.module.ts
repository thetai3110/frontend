import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfomationComponent } from './infomation.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatRadioModule, 
         MatDatepickerModule,MatButtonModule, 
         MatInputModule, MatNativeDateModule, 
         MatSelectModule, MatSnackBarModule } from '@angular/material';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  declarations: [InfomationComponent, CountdownComponent],
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
  exports: [ CountdownComponent ]
})
export class InfomationModule { }
