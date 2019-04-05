import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {

  constructor(private studentService: StudentService,
              private accountService: AccountService) { }

  form: FormGroup = new FormGroup({
    studentName: new FormControl,
    cmnd: new FormControl,
    studentDate: new FormControl,
    sex: new FormControl,
    address: new FormControl,
    email: new FormControl,
    phone: new FormControl,
    job: new FormControl,
    image: new FormControl,
  });
  
  student=  {};

  ngOnInit() {
    this.accountService.getDataByUsername(localStorage.getItem("username")).subscribe(data=>{
      if(data != null){
        this.studentService.getDataByAccount(Number(data['idAccount'])).subscribe(stu =>{
          this.form = new FormGroup({
            studentName: new FormControl(stu['studentName'], [Validators.required, Validators.maxLength(30)]),
            cmnd: new FormControl(stu['cmnd'], [Validators.required, Validators.pattern("[0-9]*")]),
            studentDate: new FormControl(new Date(stu['studentDate']),[Validators.required]),
            sex: new FormControl(String(stu['sex']), [Validators.required]),
            address: new FormControl(stu['address'], [Validators.required]),
            email: new FormControl(stu['email'], [Validators.required, Validators.email]),
            phone: new FormControl(stu['phone'], [Validators.required, Validators.pattern("[0-9]*")]),
            job: new FormControl(stu['job']),
            image: new FormControl(null),
          });
        });
      }
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }
  
}
