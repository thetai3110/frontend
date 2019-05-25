import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-manage',
  templateUrl: './course-manage.component.html',
  styleUrls: ['./course-manage.component.css']
})
export class CourseManageComponent implements OnInit {

  courses: {}

  constructor(private http: HttpClient, private router: Router) { }
  roles = "";

  ngOnInit() {
    this.getData();
    if (localStorage.getItem("roles") != null) {
      this.roles = localStorage.getItem("roles");
      if (this.roles != "Admin" && this.roles != "Educate") {
        this.router.navigate([""]);
      }
    }

  }

  getData() {
    this.http.get('http://localhost:8080/course').subscribe(data => {
      this.courses = data;
    });
  }

}
