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
      this.courseService.getDataByEducationAndStatus(data.id, 1).subscribe(lstCourse =>{
        if(lstCourse != null){
          this.courses = lstCourse;
        }
      });
    });
  }

}
