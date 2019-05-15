import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NewsDetailComponent } from './news-detail/news-detail.component';

const routes: Routes = [
  {path: '', component: NewsComponent },
  {path: 'news-detail/:id', component: NewsDetailComponent },
]; 

@NgModule({
  declarations: [NewsComponent, NewsDetailComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class NewsModule { }
