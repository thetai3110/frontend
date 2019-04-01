import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatRadioModule,
         MatButtonModule,MatInputModule,
         MatSelectModule, 
} from '@angular/material';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    MatFormFieldModule, 
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ]
})

export class LoginModule { }
