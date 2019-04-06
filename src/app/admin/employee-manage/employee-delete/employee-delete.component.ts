import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmployeeDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onCancel(){
    this.dialogRef.close();
  }

  onDel(id){
    this.employeeService.deleteData(id).subscribe(data =>{
      if(String(data) === "true"){
        this.snackBar.open("Success!!!", "Delete", {
          duration: 2000,
        });
      }else{
        this.snackBar.open("Fail!!!", "Delete", {
          duration: 2000,
        });
      }
      this.onCancel();
    })
  }

}
