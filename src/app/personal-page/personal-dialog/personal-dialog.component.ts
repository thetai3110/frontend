import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { InvoiceService } from 'src/app/services/invoice.service';
import { StudentClassService } from 'src/app/services/student-class.service';

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
            @Inject(MAT_DIALOG_DATA) public data: any,
            private invoiceService: InvoiceService,
            private snackBar: MatSnackBar,
            private studentClassService: StudentClassService) {}

  ngOnInit() {
 
  }

  public hasError = (form: FormGroup, controlName: string, errorName: string) => {
    return form.controls[controlName].hasError(errorName);
  }
  
  onPay(){
    var invoice = {
      idCourse: this.data[0].idCourse,
      idEmployee: '',
      idStudent: this.data[0].idStudent,
      dateInvoice: new Date(),
      cost: this.data[0].fee,
      payment: this.secondFormGroup.value.payment,
      email: this.firstFormGroup.value.email
    }
    var studentClass = {
      idStudent: this.data[0].idStudent,
      idClass: this.data[0].idClass,
      isFee: 1
    }
    this.invoiceService.postData(invoice).subscribe(invoice =>{
      if(invoice != null){
        this.studentClassService.updateData(this.data[0].idStudentclass, studentClass).subscribe(stu =>{
          if(stu != null){
            this.snackBar.open("Success!!!", "Payment", {
              duration: 2000,
            });
            this.dialogRef.close();
          }
        });
      }
    });
  }
}
