import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClassesService } from '../services/classes.service';
import { RegisterToStudyService } from '../services/register-to-study.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AccuracyFormComponent } from './accuracy-form/accuracy-form.component';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-register-to-study',
  templateUrl: './register-to-study.component.html',
  styleUrls: ['./register-to-study.component.css']
})
export class RegisterToStudyComponent implements OnInit {

  classes;
  id;
  allClass: any;

  form: FormGroup = new FormGroup({
    studentName: new FormControl,
    cmnd: new FormControl,
    studentDate: new FormControl,
    sex: new FormControl,
    address: new FormControl,
    email: new FormControl,
    phone: new FormControl,
    job: new FormControl,
    idClass: new FormControl,
    isLogin: new FormControl,
    idStudent: new FormControl,
  });

  constructor(private classesService: ClassesService,
    private registerToStudyService: RegisterToStudyService,
    private studentService: StudentService,
    private activateRoute: ActivatedRoute,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data => {
      if (data != null && Number(data.id)!=0) {
        this.id = data.id;
        this.classesService.getDataById(data.id).subscribe(data1 => {
          this.classes = data1['className'] + " khóa học " + data1['course'].course + " - " + data1['course']['level'].level;
        });
      }else{
        this.id  = data.id;
        this.getAll();
      }
    });
    if (localStorage.getItem("username") != null) {
      this.studentService.getDataByUsername(localStorage.getItem("username")).subscribe(data => {
        if (data != null) {
          this.form = new FormGroup({
            studentName: new FormControl(data['studentName'], [Validators.required, Validators.maxLength(30)]),
            cmnd: new FormControl(data['cmnd'], [Validators.required, Validators.pattern("[0-9]*")]),
            studentDate: new FormControl(new Date(data['studentDate']), [Validators.required]),
            sex: new FormControl(String(data['sex']), [Validators.required]),
            address: new FormControl(data['address'], [Validators.required]),
            email: new FormControl(data['email'], [Validators.required, Validators.email]),
            phone: new FormControl(data['phone'], [Validators.required, Validators.pattern("[0-9]*")]),
            job: new FormControl(data['job']),
            idClass: new FormControl(''),
            isLogin: new FormControl(1), 
            idStudent: new FormControl(data['idStudent'])
          });
        }
      });
    }else{
      this.form = new FormGroup({
        studentName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
        cmnd: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
        studentDate: new FormControl(new Date(), [Validators.required]),
        sex: new FormControl('1', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
        job: new FormControl(''),
        idClass: new FormControl(''),
        isLogin: new FormControl(0),
        idStudent: new FormControl('')
      });
    }
  }

  onSubmit(form) {
    form.idClass = this.id;
    this.registerToStudyService.postData(form).subscribe(data => {
      if (data == "1") {
        this.snackBar.open("Success!!!", "Register", {
          duration: 2000,
        });
      }
      else if(data == "2"){
        this.snackBar.open("Full!!!", "Register", {
          duration: 2000,
        });
      }
      else if (data == "3") {
        this.snackBar.open("Duplicate!!!", "Register", {
          duration: 2000,
        });
      }
      else if(data == "4"){
        this.snackBar.open("Close!!!", "Register", {
          duration: 2000,
        });
      }
      else {
        this.snackBar.open("Fail!!!", "Register", {
          duration: 2000,
        });
      }
    });
  }

  openDialog(cmnd): void {
    const dialogRef = this.dialog.open(AccuracyFormComponent, {
      width: '700px',
      data: cmnd
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  getAll(){
    this.classesService.getData().subscribe(data =>{
      this.allClass = data;
    });
  }

}
