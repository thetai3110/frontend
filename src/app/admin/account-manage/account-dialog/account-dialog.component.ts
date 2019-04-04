import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AccountService } from 'src/app/services/account.service'
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.css']
})
export class AccountDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountService: AccountService,
    private permissionService: PermissionService) { }

    form: FormGroup = new FormGroup({
      username: new FormControl(this.data.stu.username, [Validators.required, Validators.pattern("[a-zA-Z0-9]*"), Validators.minLength(6)]),
      pass: new FormControl(this.data.stu.pass, [Validators.required, Validators.pattern("[a-zA-Z0-9]*"), Validators.minLength(6)])
    });


    public hasError = (controlName: string, errorName: string) =>{
      return this.form.controls[controlName].hasError(errorName);
    }
  
    listPerTmp: any;
    listPer = [];
    listIdPer = [];

    ngOnInit() {
      this.permissionService.getAccountPerByAccount(this.data.stu.idAccount).subscribe(data =>{
        this.listPerTmp = data;
        for(var i=0;i<this.listPerTmp.length;i++){
          this.listPer.push(this.listPerTmp[i].idPer);
          this.listIdPer.push(this.listPerTmp[i].idAccountPer);
        }
      });
    }
  
    onCancel(){
      this.dialogRef.close();
    }
  
    onSubmit(form){
      this.accountService.updateData(this.data.stu.idAccount, form).subscribe(data =>{
        if(data != null){
          for(var i=0; i< this.listPer.length; i++){
            var tmp ={
              idAccountPer: this.listIdPer[i],
              idAccount : this.data.stu.idAccount,
              idPer : this.listPer[i]
            }
            this.permissionService.updateAccPer(this.listIdPer[i],tmp).subscribe();
          }
        }
      });
      setTimeout(() => {
        alert("success");
       this.onCancel();
      }, 1000);
    }

}
