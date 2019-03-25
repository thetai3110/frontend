import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassesService } from '../../services/classes.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  classes : {};
  course = {};
  level : string;
  id : string;
  
  constructor(private classesService : ClassesService,
              private courseService : CourseService, 
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data =>{
        this.id = data.id;
    });
    this.getData();
  }

  getData(){
    this.classesService.getDataByIdCourse(this.id).subscribe(data =>{
        this.classes = data;
    });
    this.courseService.getDataById(this.id).subscribe(data =>{
      this.course = data;
      this.level = this.course['level'].level;
    })
  }

}
