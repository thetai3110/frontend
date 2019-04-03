import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faUser, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  faHome = faHome; faSearch = faSearch; faUser = faUser; 
  faSignOutAlt = faSignOutAlt; faSignInAlt = faSignInAlt;
  username : string;
  isLogin= false;

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem("username") != null){
      this.username = localStorage.getItem("username");
      this.isLogin = true;
    }
  }

}
