import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: FeedbackComponent}
]; 

@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    FontAwesomeModule ,
    RouterModule
  ]
})
export class FeedbackModule { }
