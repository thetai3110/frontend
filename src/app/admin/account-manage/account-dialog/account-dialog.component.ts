import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AccountService } from 'src/app/services/account.service'

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.css']
})
export class AccountDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountService: AccountService) { }

    form: FormGroup = new FormGroup({
      username: new FormControl(this.data.stu.username, [Validators.required, Validators.pattern("[a-zA-Z0-9]*"), Validators.minLength(6)]),
      pass: new FormControl(this.data.stu.pass, [Validators.required, Validators.pattern("[a-zA-Z0-9]*"), Validators.minLength(6)])
    });


    public hasError = (controlName: string, errorName: string) =>{
      return this.form.controls[controlName].hasError(errorName);
    }
  
    ngOnInit() {
      
    }
  
    onCancel(){
      this.dialogRef.close();
    }
  
    onSubmit(form){
      this.accountService.updateData(this.data.stu.idAccount, form).subscribe(data =>{
        if(data != null){
          alert("success");
          this.onCancel();
        }
    });
    }

}
