import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { CertificateService } from 'src/app/services/certificate.service';

@Component({
  selector: 'app-certificate-delete',
  templateUrl: './certificate-delete.component.html',
  styleUrls: ['./certificate-delete.component.css']
})
export class CertificateDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CertificateDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cerService: CertificateService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onCancel(){
    this.dialogRef.close();
  }

  onDel(id){
    this.cerService.deleteData(id).subscribe(data =>{
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
