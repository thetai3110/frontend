import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { StudentService } from '../../../services/student.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private studentService: StudentService,
    private accountService: AccountService) { }

  form: FormGroup = new FormGroup({
    studentName: new FormControl(this.data.stu.studentName, [Validators.required, Validators.maxLength(30)]),
    idAccount: new FormControl(this.data.stu.accountStu!=null ? String(this.data.stu.accountStu.idAccount) : ''),
    cmnd: new FormControl(this.data.stu.cmnd, [Validators.required, Validators.pattern("[0-9]*")]),
    studentDate: new FormControl(new Date(this.data.stu.studentDate),[Validators.required]),
    sex: new FormControl(String(this.data.stu.sex), [Validators.required]),
    address: new FormControl(this.data.stu.address, [Validators.required]),
    email: new FormControl(this.data.stu.email, [Validators.required, Validators.email]),
    phone: new FormControl(this.data.stu.phone, [Validators.required, Validators.pattern("[0-9]*")]),
    job: new FormControl(this.data.stu.job),
    image: new FormControl(null),
  });
  allAccount: any;
  
  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  ngOnInit() {
    this.accountService.getData().subscribe(data =>{
      this.allAccount = data;
    });
  }

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(form){
    this.studentService.updateData(this.data.stu.idStudent, form).subscribe(data =>{
        if(data != null)
          console.log("success");
    });
  }
}
