import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  classes : {};
  course = {};
  level = {};
  lessons : {};
  id : string;
  
  constructor(private http : HttpClient, 
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data =>{
        this.id = data.id;
    });
    this.getData();
  }

  getData(){
    this.http.get('http://localhost:8080/class/follow-course/'+this.id).subscribe(data =>{
        this.classes = data;
        this.course = this.classes[0].course;
        this.level = this.classes[0].course.level;
        this.lessons = this.classes[0].course.lessons;
        console.log(this.level);
    });
  }

}
