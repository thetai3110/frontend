import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lecturers-manage',
  templateUrl: './lecturers-manage.component.html',
  styleUrls: ['./lecturers-manage.component.css']
})
export class LecturersManageComponent implements OnInit {
  constructor(private router: Router) { }
  roles = "";

  ngOnInit() {
    if (localStorage.getItem("roles") != null) {
      this.roles = localStorage.getItem("roles");
      if (this.roles != "Admin" && this.roles != "HR") {
        this.router.navigate([""]);
      }
    }

  }
}
