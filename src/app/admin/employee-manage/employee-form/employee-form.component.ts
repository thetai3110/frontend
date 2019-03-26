import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    employeeName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    idAccount: new FormControl(''),
    cmnd: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    roles: new FormControl('', [Validators.required]),
    employeeDate: new FormControl(new Date(),[Validators.required]),
    sex: new FormControl('1', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    salary: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    image: new FormControl(null),
  }); 

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  constructor(private employeeService: EmployeeService,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<EmployeeFormComponent>) { }

  allAccount : any;

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(form){
    this.employeeService.postData(form).subscribe(data =>{
      if(data!= null){
        alert('Success!');
        this.onCancel();
      }
    });
  }

  ngOnInit() {
    this.accountService.getData().subscribe(data=>{
      this.allAccount = data;
    })
  }

}
