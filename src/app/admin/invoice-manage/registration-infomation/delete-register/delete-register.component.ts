import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-delete-register',
  templateUrl: './delete-register.component.html',
  styleUrls: ['./delete-register.component.css']
})
export class DeleteRegisterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteRegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private registerService: InvoiceService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onCancel(){
    this.dialogRef.close();
  }

  onDel(id){
    this.registerService.deleteData(id).subscribe(data =>{
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
