import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { StudentClassService } from '../services/student-class.service';
import { MarksService } from '../services/marks.service';

@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.css']
})
export class SearchsComponent implements OnInit {

  constructor(private studentService: StudentService,
             private marksService: MarksService) { }

  form: FormGroup = new FormGroup({
    studentName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    cmnd: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
  });

  isInfo = true;
  isMarks = true;
  student = [];
  showData = true;
  dataSearch = [];

  ngOnInit() {
  }

  onChange(event){
    if(Number(event.target.value) == 1){
      this.isInfo = false;
      this.isMarks = true;
    }else if(Number(event.target.value) == 0){
      this.isInfo = true;
      this.isMarks = false;
    }else{
      this.isInfo = true;
      this.isMarks = true;
    }
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }


  onSubmit(form){
    this.studentService.getDataByNameAndCmnd(form.studentName, form.cmnd).subscribe(data =>{
      if(data != null){
        this.student = data;
        this.showData = false;
      }else{
        this.showData = true;
      }
    });
  }

  onSubmit1(form){
    this.marksService.getDataBNameAndCMND(form.studentName, form.cmnd).subscribe(data =>{
      if(data != null){
        this.student = data;
        this.showData = false;
      }else{
        this.showData = true;
      }
    });
  }
}
