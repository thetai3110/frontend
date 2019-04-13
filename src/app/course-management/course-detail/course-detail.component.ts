import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassesService } from '../../services/classes.service';
import { CourseService } from '../../services/course.service';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  lessons: {};
  classes: {};
  course = {};
  level: string;
  education: string;
  id: string;

  constructor(private lessonService: LessonService,
    private classesService: ClassesService,
    private courseService: CourseService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data => {
      this.id = data.id;
    });
    this.getData();
  }

  getData() {
    this.lessonService.getDataByCourse(this.id).subscribe(data => {
      if (data != null)
        this.lessons = data;
    })
    this.classesService.getDataByIdCourse(this.id).subscribe(data => {
      if (data != null)
        this.classes = data;
    });
    this.courseService.getDataById(this.id).subscribe(data => {
      if (data != null) {
        this.course = data;
        this.level = this.course['level'].level;
        this.education = this.course['educationProgram'].eduName;
      }
    })
  }

}
