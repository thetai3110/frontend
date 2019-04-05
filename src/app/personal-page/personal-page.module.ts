import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule, MatButtonModule, MatFormFieldModule,
         MatInputModule, MatRadioModule, MatDatepickerModule } from '@angular/material';

import { PersonalPageComponent } from './personal-page.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';

@NgModule({
  declarations: [PersonalPageComponent, PersonalFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatRadioModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PersonalPageModule { }
