import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-show-course',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.css']
})
export class ShowCourseComponent implements OnInit {

  courses : {};

  constructor(private courseService : CourseService) { }

  ngOnInit() {
    this.getCourse();
  }

  getCourse(){
    this.courseService.getData().subscribe(data => {
      if(data != null)
        this.courses = data;
    });
  }

}
