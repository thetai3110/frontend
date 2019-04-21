import { Component, OnInit, Inject } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { CourseService } from 'src/app/services/course.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { InvoiceService } from 'src/app/services/invoice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})
export class InvoiceDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private invoiceService: InvoiceService,
    private employeeService: EmployeeService,
    private classService: ClassesService,
    private snackBar: MatSnackBar) { }

  form: FormGroup = new FormGroup({
    idClass: new FormControl(this.data.stu.clazz == null ? '' : String(this.data.stu.clazz.idClass), [Validators.required]),
    studentName: new FormControl(this.data.stu.studentName, [Validators.required]),
    idEmployee: new FormControl(this.data.stu.idEmployee == null ? '' : String(this.data.stu.employee.idEmployee), [Validators.required]),
    dateInvoice: new FormControl(new Date(this.data.stu.dateInvoice), [Validators.required]),
    cost: new FormControl(this.data.stu.cost, [Validators.required]),
    payment: new FormControl(this.data.stu.payment, [Validators.required]),
    groupNum: new FormControl(this.data.stu.groupNum),
  });

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  allClass: any;
  allEmployee: any;

  ngOnInit() {
    this.classService.getData().subscribe(data =>{
      if(data != null)
        this.allClass = data;
    });
    this.employeeService.getData().subscribe(data => {
      if (data != null)
        this.allEmployee = data;
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.invoiceService.updateData(this.data.stu.idInvoice, form).subscribe(data => {
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
