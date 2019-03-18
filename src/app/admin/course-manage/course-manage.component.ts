import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-manage',
  templateUrl: './course-manage.component.html',
  styleUrls: ['./course-manage.component.css']
})
export class CourseManageComponent implements OnInit {

  courses : {}

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.http.get('http://localhost:8080/course').subscribe(data =>{
      this.courses = data;
    });
  }

}
