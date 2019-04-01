import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClassesService } from '../services/classes.service';
import { RegisterToStudyService } from '../services/register-to-study.service';
import { MatDialog } from '@angular/material';
import { AccuracyFormComponent } from './accuracy-form/accuracy-form.component';

@Component({
  selector: 'app-register-to-study',
  templateUrl: './register-to-study.component.html',
  styleUrls: ['./register-to-study.component.css']
})
export class RegisterToStudyComponent implements OnInit {

  classes;
  id;

  form: FormGroup = new FormGroup({
    studentName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    cmnd: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    studentDate: new FormControl(new Date(), [Validators.required]),
    sex: new FormControl('1', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    job: new FormControl(''),
    idClass: new FormControl('')
  });

  constructor(private classesService: ClassesService,
    private registerToStudyService: RegisterToStudyService,
    private activateRoute: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data => {
      this.id = data.id;
      this.classesService.getDataById(data.id).subscribe(data1 => {
        this.classes = data1['className'] + " khóa học " + data1['course'].course + " - " + data1['course']['level'].level;
      });
    });
  }

  onSubmit(form) {
    form.idClass = this.id;
    this.registerToStudyService.postData(form).subscribe(data => {
      if (data == "1")
        alert("success!!!");
      else if (data == 2) { 
        this.openDialog(form.cmnd);
      }
      else alert("fail!!!")
    });
  }

  openDialog(cmnd): void {
    const dialogRef = this.dialog.open(AccuracyFormComponent, {
      width: '700px',
      data : cmnd
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

}
