import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchsComponent } from './searchs.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule, MatSortModule, MatFormFieldModule,
  MatButtonModule, MatSelectModule, MatIconModule,
  MatSnackBarModule
} from '@angular/material';

import { DataSearchComponent } from './data-search/data-search.component';

@NgModule({
  declarations: [SearchsComponent, DataSearchComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSortModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class SearchsModule { }
