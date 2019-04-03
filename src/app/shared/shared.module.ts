import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent} from './header/contact/contact.component';
import { CategoriesComponent} from './header/categories/categories.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContactComponent, CategoriesComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})

export class SharedModule { }
