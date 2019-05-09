import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuModule, MatCardModule, MatButtonModule, MatExpansionModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent} from './header/contact/contact.component';
import { CategoriesComponent} from './header/categories/categories.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContactComponent, CategoriesComponent, FeedbackFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FeedbackFormComponent
  ]
})

export class SharedModule { }
