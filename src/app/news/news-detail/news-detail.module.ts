import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsDetailComponent } from './news-detail.component';

const routes: Routes = [
  {path: '', component: NewsDetailComponent },
]; 

@NgModule({
  declarations: [NewsDetailComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ]
})

export class NewsDetailModule { }
