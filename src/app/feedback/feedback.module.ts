import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    SharedModule,
    CommonModule,
    FontAwesomeModule ,
    RouterModule
  ]
})
export class FeedbackModule { }
