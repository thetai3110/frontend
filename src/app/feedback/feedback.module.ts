import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    SharedModule,
    CommonModule 
  ]
})
export class FeedbackModule { }
