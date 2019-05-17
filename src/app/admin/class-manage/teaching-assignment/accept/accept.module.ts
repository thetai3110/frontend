import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AcceptComponent } from './accept.component';
import { MatButtonModule } from '@angular/material';

const routes: Routes = [
  {path: '', component: AcceptComponent},
]; 

@NgModule({
  declarations: [AcceptComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    MatButtonModule
  ]
})
export class AcceptModule { }
