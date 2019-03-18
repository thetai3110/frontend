import { Component, OnInit } from '@angular/core';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  faHome = faHome;
  faSearch = faSearch;

  constructor() { }

  ngOnInit() {
  }

}
