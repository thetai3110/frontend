import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LecturersService } from 'src/app/services/lecturers.service';
import { MajorsService } from 'src/app/services/majors.service';

@Component({
  selector: 'app-lecturers-dialog',
  templateUrl: './lecturers-dialog.component.html',
  styleUrls: ['./lecturers-dialog.component.css']
})
export class LecturersDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LecturersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private lecturersService: LecturersService,
    private majorsService: MajorsService,
    private snackBar: MatSnackBar) { }

  form: FormGroup = new FormGroup({
    lecturersName: new FormControl(this.data.stu.lecturersName, [Validators.required, Validators.maxLength(30)]),
    idMajors: new FormControl(this.data.stu.majors != null ? String(this.data.stu.majors.idMajors) : ''),
    other: new FormControl(''),
    lecturersDate: new FormControl(new Date(this.data.stu.lecturersDate), [Validators.required]),
    sex: new FormControl(String(this.data.stu.sex), [Validators.required]),
    address: new FormControl(this.data.stu.address, [Validators.required]),
    email: new FormControl(this.data.stu.email, [Validators.required, Validators.email]),
    phone: new FormControl(this.data.stu.phone, [Validators.required, Validators.pattern("[0-9]*")]),
    salary: new FormControl(this.data.stu.salary, [Validators.required, Validators.pattern("[0-9]*")]),
    image: new FormControl(null),
  });

   allMajors: any;
  showMajors = true;
  showOther = false;

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  ngOnInit() {
    this.majorsService.getData().subscribe(data => {
      if (data != null)
        this.allMajors = data;
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    if (this.showOther == true) {
      var majors = {
        majors: this.form.value.other
      }
      this.majorsService.postData(majors).subscribe(data => {
        this.form.value.idMajors = data['idMajors'];
        this.lecturersService.updateData(this.data.stu.idLecturers, form).subscribe(data => {
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
      });
    } else {
      this.lecturersService.updateData(this.data.stu.idLecturers, form).subscribe(data => {
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

  onChange(){
    this.showMajors = !this.showMajors;
    this.showOther = !this.showOther;    
  }
  
}
