import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]*"), Validators.minLength(6)]),
    pass: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]*"), Validators.minLength(6)])
  }); 

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  constructor(private accountService: AccountService,
        public dialogRef: MatDialogRef<AccountFormComponent>,
        private snackBar: MatSnackBar) { }

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(form){
    this.accountService.postData(form).subscribe(data =>{
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

  ngOnInit() {
  }

}
