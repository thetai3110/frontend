import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../shared/shared.module';

import { RegisterToStudyComponent } from './register-to-study.component';

@NgModule({
  declarations: [RegisterToStudyComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class RegisterToStudyModule { }
