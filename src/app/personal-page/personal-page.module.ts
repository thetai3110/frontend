import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule, MatButtonModule, MatFormFieldModule,
         MatInputModule, MatRadioModule, MatDatepickerModule,
         MatSidenavModule, MatIconModule, MatExpansionModule, 
         MatPaginatorModule, MatTableModule, MatSortModule,
         MatSnackBarModule, MatStepperModule, MatSelectModule} from '@angular/material';

import { PersonalPageComponent } from './personal-page.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { ListRegisteredComponent } from './list-registered/list-registered.component';
import { TableRegisteredComponent } from './table-registered/table-registered.component';
import { PersonalDialogComponent } from './personal-dialog/personal-dialog.component';

@NgModule({
  declarations: [PersonalPageComponent, PersonalFormComponent, ListRegisteredComponent, TableRegisteredComponent, PersonalDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatRadioModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PersonalPageModule { }
