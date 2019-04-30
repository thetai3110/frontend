import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { EducationprogramService } from '../services/educationprogram.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  courses: any;

  ngOnInit() {
    this.courseService.getDataByStatus(1).subscribe(data => {
      if (data != null)
        this.courses = data;
    });
  }

}
