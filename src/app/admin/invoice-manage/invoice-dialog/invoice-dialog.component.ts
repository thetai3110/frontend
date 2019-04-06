import { Component, OnInit, Inject } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { CourseService } from 'src/app/services/course.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { InvoiceService } from 'src/app/services/invoice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})
export class InvoiceDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private invoiceService: InvoiceService,
    private studentService: StudentService,
    private employeeService: EmployeeService,
    private courseService: CourseService,
    private snackBar: MatSnackBar) { }

  form: FormGroup = new FormGroup({
    idCourse: new FormControl(this.data.stu.course == null ? '' : String(this.data.stu.course.idCourse), [Validators.required]),
    idStudent: new FormControl(this.data.stu.student == null ? '' : String(this.data.stu.student.idStudent), [Validators.required]),
    idEmployee: new FormControl(this.data.stu.idEmployee == null ? '' : String(this.data.stu.employee.idEmployee), [Validators.required]),
    dateInvoice: new FormControl(new Date(this.data.stu.dateInvoice), [Validators.required]),
    cost: new FormControl(this.data.stu.cost, [Validators.required]),
    payment: new FormControl(this.data.stu.payment, [Validators.required])
  });

  allAccount: any;

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  allCourse: any;
  allStudent: any;
  allEmployee: any;

  ngOnInit() {
    this.courseService.getData().subscribe(data => {
      if (data != null)
        this.allCourse = data;
    });
    this.studentService.getData().subscribe(data => {
      if (data != null)
        this.allStudent = data;
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
