import { Component, OnInit } from '@angular/core';
import { LecturersService } from '../../../services/lecturers.service';
import { MajorsService } from '../../../services/majors.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-lecturers-form',
  templateUrl: './lecturers-form.component.html',
  styleUrls: ['./lecturers-form.component.css']
})
export class LecturersFormComponent implements OnInit {
  constructor(private lecturersService: LecturersService,
    private majorsService: MajorsService, 
    public dialogRef: MatDialogRef<LecturersFormComponent>,
    private snackBar: MatSnackBar) { }

  form: FormGroup = new FormGroup({
    lecturersName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    idMajors: new FormControl(''),
    other: new FormControl(''),
    lecturersDate: new FormControl(new Date(), [Validators.required]),
    sex: new FormControl('1', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    salary: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    image: new FormControl(null),
  });

  allMajors: any;
  showMajors = true;
  showOther = false;

  ngOnInit() {
    this.majorsService.getData().subscribe(data =>{
      if(data != null)
        this.allMajors = data;
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(form) {
    if(this.showOther == true){
      var majors = {
        majors : this.form.value.other
      }
      this.majorsService.postData(majors).subscribe(data =>{
        this.form.value.idMajors = data['idMajors'];
        this.lecturersService.postData(form).subscribe(data => {
          if (data != null) {
            this.snackBar.open("Success!!!", "Add", {
              duration: 2000,
            });
          }else{
            this.snackBar.open("Fail!!!", "Add", {
              duration: 2000,
            });
          }
          this.onCancel();
        });
      });
    }else{
      this.lecturersService.postData(form).subscribe(data => {
        if (data != null) {
          this.snackBar.open("Success!!!", "Add", {
            duration: 2000,
          });
        }else{
          this.snackBar.open("Fail!!!", "Add", {
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
