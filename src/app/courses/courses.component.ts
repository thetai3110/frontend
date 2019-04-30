import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { EducationprogramService } from '../services/educationprogram.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
              private courseService: CourseService,
              private educationProgramService: EducationprogramService) { }

  courses: any;
  courseBasic: any;
  courseAdvance: any;
  title: string;
  
  ngOnInit() {
    this.activateRoute.params.subscribe(data => {
      this.educationProgramService.getDataById(data.id).subscribe(edu =>{
        if(edu != null)
          this.title = edu['eduName'];
      });
      this.courseService.getDataByEducationAndStatus(Number(data.id), 1).subscribe(courses =>{
        if(courses != null){
          this.courses = courses;
        }else{
          this.courses = null;
        }
      });
      this.courseService.getDataByLevelAndEducationAndStatus(Number(data.id), 1, 1).subscribe(courses =>{
        if(courses != null){
          this.courseBasic = courses;
        }else{
          this.courseBasic = null;
        }
      });
      this.courseService.getDataByLevelAndEducationAndStatus(Number(data.id), 2, 1).subscribe(courses =>{
        if(courses != null){
          this.courseAdvance = courses;
        }else{
          this.courseAdvance = null;
        }
      });
    });
  }

}
