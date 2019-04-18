import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassesService } from '../services/classes.service';
import { RegisterToStudyService } from '../services/register-to-study.service';
import { MatSnackBar, MatTableDataSource, MatSort } from '@angular/material';
import { StudentService } from '../services/student.service';
import { EducationprogramService } from '../services/educationprogram.service';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-register-to-study',
  templateUrl: './register-to-study.component.html',
  styleUrls: ['./register-to-study.component.css']
})
export class RegisterToStudyComponent implements OnInit {

  classes;

  constructor(private classesService: ClassesService,
    private registerToStudyService: RegisterToStudyService,
    private studentService: StudentService,
    private activateRoute: ActivatedRoute,
    private courseService: CourseService,
    private educationProgramService: EducationprogramService,
    private snackBar: MatSnackBar) { }

  allEdu: any;
  isCourse = true;
  courseByEdu: any;
  title = "";
  isClass = true;
  classByCourse = 1;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['className', 'date', 'dayStart', 'space', 'size', 'tool'];
  dataSource;


  ngOnInit() {
    this.educationProgramService.getData().subscribe(data => {
      if (data != null)
        this.allEdu = data;
    });
  }

  onChange(event) {
    this.reloadTable(event.target.value);
    this.isClass = false;
  }

  showCourse(idEdu) {
    this.isClass = true;
    this.courseByEdu = null;
    this.isCourse = true;
    this.courseService.getDataByEducation(idEdu).subscribe(data => {
      this.courseByEdu = data;
    });
    this.isCourse = false;
  }

  reloadTable(id) {
    this.classesService.getDataByIdCourse(id).subscribe(rs => {
      if (rs != null) {
        this.dataSource = new MatTableDataSource(rs);
        this.dataSource.sort = this.sort;
      }else{
        this.dataSource = null;
      }
    });
  }

}
