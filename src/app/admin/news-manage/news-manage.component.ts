import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-manage',
  templateUrl: './news-manage.component.html',
  styleUrls: ['./news-manage.component.css']
})
export class NewsManageComponent implements OnInit {

  constructor(private router: Router) { }
  roles = "";

  ngOnInit() { 
    if (localStorage.getItem("roles") != null) {
      this.roles = localStorage.getItem("roles");
      if (this.roles != "Admin" && this.roles != "Educate") {
        this.router.navigate([""]);
      }
    }

  }

}
