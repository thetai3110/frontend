import { Component, OnInit, Inject } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
 
  constructor(private studentService: StudentService,
         private accountService: AccountService,
         public dialogRef: MatDialogRef<StudentFormComponent>,
         @Inject(MAT_DIALOG_DATA) public data: any,
         private snackBar: MatSnackBar) { }
 
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

  ngOnInit() {
    this.accountService.getData().subscribe(data =>{
      if(data != null)
        this.allAccount = data;
    });
  }

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(form){
    this.studentService.postData(form).subscribe(data =>{
      if(data!= null){
        this.snackBar.open("Success!!!", "Add", {
          duration: 2000,
        });
        this.dialogRef.close(data['idStudent']);
      }else{
        this.snackBar.open("Fail!!!", "Add", {
          duration: 2000,
        });
        this.onCancel();
      }
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }
  
}
