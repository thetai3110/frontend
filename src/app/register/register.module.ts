import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatRadioModule, 
  MatDatepickerModule,MatButtonModule, 
  MatInputModule, MatNativeDateModule, 
  MatSelectModule,
} from '@angular/material';

import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatRadioModule, 
    MatDatepickerModule,MatButtonModule, 
    MatInputModule, MatNativeDateModule, 
    MatSelectModule
  ]
})
export class RegisterModule { }
