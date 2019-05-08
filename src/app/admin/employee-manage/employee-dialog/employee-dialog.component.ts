import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmployeeDialogComponent>,
    private rolesService: RolesService,
    @Inject(MAT_DIALOG_DATA) public data: any, private employeeService: EmployeeService,
    private snackBar: MatSnackBar) { }

    form: FormGroup = new FormGroup({
      employeeName: new FormControl(this.data.stu.employeeName, [Validators.required, Validators.maxLength(30)]),
      username: new FormControl(this.data.stu.username, [Validators.required, Validators.minLength(5)]),
      pass: new FormControl(this.data.stu.pass, [Validators.required, Validators.minLength(5)]),
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
  
    allRoles: any;

    ngOnInit() {
      this.rolesService.getData().subscribe(data =>{
        if(data != null){
          this.allRoles = data;
        }
      });
    }
  
    onCancel(){ 
      this.dialogRef.close();
    }
  
    onSubmit(form){
      this.employeeService.updateData(this.data.stu.idEmployee, form).subscribe(data =>{
        if(data != null){
          this.snackBar.open("Success!!!", "Update", {
            duration: 2000,
          });
        }else{
          this.snackBar.open("Fail!!!", "Update", {
            duration: 2000,
          });
        }
        this.onCancel();
    });
    }

}
