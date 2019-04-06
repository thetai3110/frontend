import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { LecturersService } from 'src/app/services/lecturers.service';
import { MajorsService } from 'src/app/services/majors.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-lecturers-dialog',
  templateUrl: './lecturers-dialog.component.html',
  styleUrls: ['./lecturers-dialog.component.css']
})
export class LecturersDialogComponent implements OnInit {
 
  constructor(public dialogRef: MatDialogRef<LecturersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private lecturersService: LecturersService,
    private majorsService: MajorsService, private accountService: AccountService,
    private snackBar: MatSnackBar) { }

    form: FormGroup = new FormGroup({
      lecturersName: new FormControl(this.data.stu.lecturersName, [Validators.required, Validators.maxLength(30)]),
      idAccount: new FormControl(this.data.stu.accountStu!=null ? String(this.data.stu.accountStu.idAccount) : ''),
      idMajors: new FormControl(this.data.stu.majors!=null ? String(this.data.stu.majors.idMajors) : '', [Validators.required, Validators.pattern("[0-9]*")]),
      lecturersDate: new FormControl(new Date(this.data.stu.lecturersDate),[Validators.required]),
      sex: new FormControl(String(this.data.stu.sex), [Validators.required]),
      address: new FormControl(this.data.stu.address, [Validators.required]),
      email: new FormControl(this.data.stu.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.data.stu.phone, [Validators.required, Validators.pattern("[0-9]*")]),
      salary: new FormControl(this.data.stu.salary, [Validators.required, Validators.pattern("[0-9]*")]),
      image: new FormControl(null),
    });

    allAccount: any; allMajors: any;
  
    public hasError = (controlName: string, errorName: string) =>{
      return this.form.controls[controlName].hasError(errorName);
    }
  
    ngOnInit() {
      this.accountService.getData().subscribe(data =>{
        if(data != null)
          this.allAccount = data;
      });
      this.majorsService.getData().subscribe(data =>{
        if(data != null)
          this.allMajors = data;
      });
    }
  
    onCancel(){
      this.dialogRef.close();
    }
  
    onSubmit(form){
      this.lecturersService.updateData(this.data.stu.idLecturers, form).subscribe(data =>{
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
