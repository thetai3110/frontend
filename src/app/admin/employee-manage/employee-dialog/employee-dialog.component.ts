import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private employeeService: EmployeeService,
    private accountService: AccountService) { }

    form: FormGroup = new FormGroup({
      employeeName: new FormControl(this.data.stu.employeeName, [Validators.required, Validators.maxLength(30)]),
      idAccount: new FormControl(this.data.stu.accountEmp!=null ? String(this.data.stu.accountEmp.idAccount) : ''),
      cmnd: new FormControl(this.data.stu.cmnd, [Validators.required, Validators.pattern("[0-9]*")]),
      roles: new FormControl(this.data.stu.roles, [Validators.required]),
      employeeDate: new FormControl(new Date(this.data.stu.employeeDate),[Validators.required]),
      sex: new FormControl(String(this.data.stu.sex), [Validators.required]),
      address: new FormControl(this.data.stu.address, [Validators.required]),
      email: new FormControl(this.data.stu.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.data.stu.phone, [Validators.required, Validators.pattern("[0-9]*")]),
      salary: new FormControl(this.data.stu.salary, [Validators.required, Validators.pattern("[0-9]*")]),
      image: new FormControl(null),
    }); 
  
    allAccount : any;

    public hasError = (controlName: string, errorName: string) =>{
      return this.form.controls[controlName].hasError(errorName);
    }
  
    ngOnInit() {
      this.accountService.getData().subscribe(data=>{
        this.allAccount = data;
      })
    }
  
    onCancel(){
      this.dialogRef.close();
    }
  
    onSubmit(form){
      
    }

}
