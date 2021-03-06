import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatDialog } from '@angular/material';
import { InvoiceService } from 'src/app/services/invoice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    idClass : new FormControl('', [Validators.required]),
    studentName: new FormControl('', [Validators.required]),
    idEmployee: new FormControl('', [Validators.required]),
    dateInvoice: new FormControl(new Date(), [Validators.required]),
    cost: new FormControl('',[Validators.required]),
    payment: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    groupNum: new FormControl(''),
    idStudent: new FormControl('')
  }); 

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  constructor(private invoiceService: InvoiceService,
    private employeeService: EmployeeService,
    private classService: ClassesService,
    public dialogRef: MatDialogRef<InvoiceFormComponent>,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  allClass : any;
  allEmployee : any;

  ngOnInit() {
    this.classService.getData().subscribe(data =>{
      if(data != null)
        this.allClass = data;
    });
    this.employeeService.getData().subscribe(data =>{
      if(data != null)
        this.allEmployee = data;
    });
  }

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(form){
    if(Number(form.groupNum) == 3){
      form.cost = Number(form.cost) * 3 - 150000;
    }else if(Number(form.groupNum) == 5){
      form.cost = Number(form.cost) * 5 - 350000;
    }else if(Number(form.groupNum) == 7){
      form.cost = Number(form.cost) * 7 - 700000;
    }
    this.invoiceService.postData(form).subscribe(data =>{
      if(data!= null){
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
