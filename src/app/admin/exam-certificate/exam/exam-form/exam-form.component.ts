import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';
import { ExamService } from 'src/app/services/exam.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit {

  // form: FormGroup = new FormGroup({
  //   idClass: new FormControl(''),
  //   dayExam: new FormControl(new Date(), [Validators.required]),
  //   timeExam: new FormControl('', [Validators.required]),
  //   duration: new FormControl('',[Validators.required]),
  //   status: new FormControl('1', [Validators.required])
  // }); 

  form: FormGroup = new FormGroup({
    idCourse: new FormControl,
    duration: new FormControl,
    status: new FormControl,
  });


  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  constructor(private examService: ExamService,
    private classesService: ClassesService,
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
      this.form.removeControl("form-"+idClass);
      this.form.removeControl("time-"+idClass);
    }
  }

  onSubmit() {
    console.log(this.form.value);

    // this.examService.postData(form).subscribe(data =>{
    //   if(data!= null){
    //     this.snackBar.open("Success!!!", "Add", {
    //       duration: 2000,
    //     });
    //   }else{
    //     this.snackBar.open("Fail!!!", "Add", {
    //       duration: 2000,
    //     });
    //   }
    //   this.onCancel();
    // });
  }


  loadDataByIdCourse(id) {
    this.classesService.getDataByIdCourse(id).subscribe(data => {
      if (data != null)
        this.classByCourse = data;
    });
  }

  loadDataByIdClass(id) {
    this.classesService.getDataById(id).subscribe(data => {
      if (data != null) {
        this.listClass.push(data);
        this.form.addControl("form-"+id, new FormControl());
        this.form.addControl("time-"+id, new FormControl());
      }
    });
  }

}
