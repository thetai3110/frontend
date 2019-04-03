import { Component, OnInit, Inject } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-account-delete',
  templateUrl: './account-delete.component.html',
  styleUrls: ['./account-delete.component.css']
})
export class AccountDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AccountDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountService: AccountService) { }

  ngOnInit() {
  }

  onCancel(){
    this.dialogRef.close();
  }

  onDel(id){
    this.accountService.deleteData(id).subscribe(data =>{
      if(String(data) === "true"){
        this.onCancel();
      }else{
        console.log(data);
      }
    })
  }

}
