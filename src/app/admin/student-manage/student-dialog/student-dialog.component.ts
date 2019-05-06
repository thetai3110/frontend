import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private studentService: StudentService,
    private snackBar: MatSnackBar) { }

  form: FormGroup = new FormGroup({
    studentName: new FormControl(this.data.stu.studentName, [Validators.required, Validators.maxLength(30)]),
    cmnd: new FormControl(this.data.stu.cmnd, [Validators.required, Validators.pattern("[0-9]*")]),
    studentDate: new FormControl(new Date(this.data.stu.studentDate), [Validators.required]),
    sex: new FormControl(String(this.data.stu.sex), [Validators.required]),
    address: new FormControl(this.data.stu.address, [Validators.required]),
    email: new FormControl(this.data.stu.email, [Validators.required, Validators.email]),
    phone: new FormControl(this.data.stu.phone, [Validators.required, Validators.pattern("[0-9]*")]),
    job: new FormControl(this.data.stu.job),
    image: new FormControl(''),
  });
  allAccount: any;

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  ngOnInit() {
   
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.studentService.updateData(this.data.stu.idStudent, form).subscribe(data => {
      if (data != null) {
        this.snackBar.open("Success!!!", "Update", {
          duration: 2000,
        });
      } else {
        this.snackBar.open("Fail!!!", "Update", {
          duration: 2000,
        });
      }
      this.onCancel();
    });
  }
}
