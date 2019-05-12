import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NewsDetailComponent } from './news-detail/news-detail.component';

@NgModule({
  declarations: [NewsComponent, NewsDetailComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule
  ]
})
export class NewsModule { }
