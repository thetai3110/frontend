import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-personal-dialog',
  templateUrl: './personal-dialog.component.html',
  styleUrls: ['./personal-dialog.component.css']
})
export class PersonalDialogComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  secondFormGroup: FormGroup = new FormGroup({
     payment: new FormControl('', [Validators.required])
  });

  constructor(public dialogRef: MatDialogRef<PersonalDialogComponent>,
            @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
 
  }

  public hasError = (form: FormGroup, controlName: string, errorName: string) => {
    return form.controls[controlName].hasError(errorName);
  }
  
  onPay(){
    console.log(this.data);
  }
}
