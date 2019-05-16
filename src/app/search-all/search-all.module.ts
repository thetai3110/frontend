import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchAllComponent } from './search-all.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: SearchAllComponent}
];

@NgModule({
  declarations: [SearchAllComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class SearchAllModule { }
