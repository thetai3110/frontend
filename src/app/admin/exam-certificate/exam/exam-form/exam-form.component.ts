import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';
import { ExamService } from 'src/app/services/exam.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';
import { ExamDetailService } from 'src/app/services/exam-detail.service';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    idCourse: new FormControl,
    duration: new FormControl,
    dateExam: new FormControl,
    status: new FormControl,
  });

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  constructor(private examService: ExamService,
    private classesService: ClassesService,
    private examDetailService: ExamDetailService,
    private courseService: CourseService,
    public dialogRef: MatDialogRef<ExamFormComponent>,
    private snackBar: MatSnackBar) { }

  classByCourse: any;
  allCourse: any;
  idCourse = "";
  showClass = true;
  showDate = true;
  listClass = [];
  classes = [];

  ngOnInit() {
    this.courseService.getData().subscribe(data => {
      if (data != null)
        this.allCourse = data;
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onChangeCourse(event) {
    if (event.target.value != "") {
      this.loadDataByIdCourse(event.target.value);
      this.showClass = false;
    } else {
      this.showClass = true;
    }
  }

  onChoose(event, idClass) {
    if (event.checked == true) {
      this.loadDataByIdClass(idClass);
      this.showDate = false;
    } else {
      var pos = this.listClass.indexOf(idClass);
      this.listClass.splice(pos, 1);
      this.form.removeControl("form" + idClass);
      this.form.removeControl("time" + idClass);
    }
  }

  onSubmit() {
    this.examService.postData(this.form.value).subscribe(data => {
      if (data != null) {
        var list = [];
        for (var i = 0; i < this.listClass.length; i++) {
          var detail = {
            idExam: data['idExam'],
            idClass: this.listClass[i].idClass,
            dayExam: this.form.get('form' + this.listClass[i].idClass).value,
            timeExam: this.form.get('time' + this.listClass[i].idClass).value,
          }
          list.push(detail);
        }
        this.examDetailService.postMultiData(list).subscribe(rs => {
          if (rs != null) {
            this.snackBar.open("Success!!!", "Add", {
              duration: 2000,
            });
          } else {
            this.snackBar.open("Fail!!!", "Add", {
              duration: 2000,
            });
          }
          this.onCancel()
        });
      };
    });
  }

  loadDataByIdCourse(id) {
    this.classesService.getDataByIdCourseAndStatus(id, 1).subscribe(data => {
      if (data != null)
        this.classByCourse = data;
    });
  }

  loadDataByIdClass(id) {
    this.classesService.getDataById(id).subscribe(data => {
      if (data != null) {
        this.listClass.push(data);
        this.form.addControl("form" + id, new FormControl());
        this.form.addControl("time" + id, new FormControl());
      }
    });
  }

}
