import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor(private studentService: StudentService, private accountService: AccountService) { }

  form: FormGroup = new FormGroup({
    studentName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    idAccount: new FormControl(''),
    cmnd: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    studentDate: new FormControl(new Date(),[Validators.required]),
    sex: new FormControl('1', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    job: new FormControl(''),
    image: new FormControl(null),
  });
  allAccount: any;

  onSubmit(form){
    this.studentService.postData(form).subscribe(data =>{
      if(data!= null){
        alert('Success!');
      }
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }
  
  ngOnInit() {
    this.accountService.getData().subscribe(data =>{
      this.allAccount = data;
    });
  }
}
