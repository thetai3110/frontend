import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-calendar-open',
  templateUrl: './calendar-open.component.html',
  styleUrls: ['./calendar-open.component.css']
})
export class CalendarOpenComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
              private courseService: CourseService) { }

  courses : any;
  edu : String;
  ngOnInit() {
    this.activateRoute.params.subscribe(data => {
      this.courseService.getDataByEducation(data.id).subscribe(lstCourse =>{
        if(lstCourse != null){
          this.courses = lstCourse;
        }
      });
    });
  }

}
