import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ClassesService } from 'src/app/services/classes.service';
import { ExamService } from 'src/app/services/exam.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';
import { ExamDetailService } from 'src/app/services/exam-detail.service';

@Component({
  selector: 'app-exam-dialog',
  templateUrl: './exam-dialog.component.html',
  styleUrls: ['./exam-dialog.component.css']
})
export class ExamDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private examService: ExamService,
    private courseService: CourseService, private snackBar: MatSnackBar,
    private examDetailService: ExamDetailService,
    private classesService: ClassesService) { }

  form: FormGroup = new FormGroup({
    idCourse: new FormControl(this.data.stu.course == null ? '' : this.data.stu.course.idCourse),
    duration: new FormControl(this.data.stu.duration),
    dateExam: new FormControl(new Date(this.data.stu.dateExam)),
  });

  allCourse: any;
  listClass = [];
  examDetail: any;

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  ngOnInit() {
    this.courseService.getData().subscribe(data => {
      if (data != null)
        this.allCourse = data;
    });
    this.examDetailService.getDataByExam(this.data.stu.idExam).subscribe(data => {
      this.examDetail = data;
      for (var i = 0; i < this.examDetail.length; i++) {
        var id = this.examDetail[i].idClass;
        var day = this.examDetail[i].dayExam;
        var time = this.examDetail[i].timeExam;
        this.classesService.getDataById(id).subscribe(data => {
          if (data != null) {
            this.form.addControl("form" + id, new FormControl(new Date(day)));
            this.form.addControl("time" + id, new FormControl(time));
            this.listClass.push(data);
          }
        });
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.examService.updateData(this.data.stu.idExam, this.form.value).subscribe(data => {
      if (data != null) {
        var id = data['idExam'];
        this.examDetailService.getDataByExam(id).subscribe(data1 => {
          this.examDetail = data1;
          for (var i = 0; i < this.examDetail.length; i++) {
            var detail = {
              idExam: id,
              idClass: this.examDetail[i].idClass,
              dayExam: this.form.get('form' + this.listClass[i].idClass).value,
              timeExam: this.form.get('time' + this.listClass[i].idClass).value,
            };
            var idDetail = this.examDetail[i].idExamDetail;
            this.examDetailService.updateData(idDetail, detail).subscribe();
          }
          this.snackBar.open("Success!!!", "Update", {
            duration: 2000,
          });
        });
      } else {
        this.snackBar.open("Fail!!!", "Update", {
          duration: 2000,
        });
      }
      this.onCancel();
    });
  }

}
