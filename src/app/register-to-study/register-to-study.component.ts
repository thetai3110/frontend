import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClassesService } from '../services/classes.service';

@Component({
  selector: 'app-register-to-study',
  templateUrl: './register-to-study.component.html',
  styleUrls: ['./register-to-study.component.css']
})
export class RegisterToStudyComponent implements OnInit {

  classes;

  form: FormGroup = new FormGroup({
    studentName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    cmnd: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    studentDate: new FormControl(new Date(),[Validators.required]),
    sex: new FormControl('1', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    job: new FormControl(''),
    idClass : new FormControl({value: this.classes, disabled: true})
  });

  constructor(private classesService: ClassesService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data =>{
      this.classesService.getDataById(data.id).subscribe(data1 =>{
        this.classes =  data1['className'] + " khóa học " + data1['course'].course + " - " + data1['course']['level'].level;
        console.log(this.classes);
      });
    });
  }

  onSubmit(form){
    // this.classesService.post(form).subscribe(data =>{
    //   console.log(data);
    // });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

}
