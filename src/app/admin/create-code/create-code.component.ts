import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
import { SalesService } from 'src/app/services/sales.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-code',
  templateUrl: './create-code.component.html',
  styleUrls: ['./create-code.component.css']
})
export class CreateCodeComponent implements OnInit {

  constructor(private salesService: SalesService,
              public dialogRef: MatDialogRef<CreateCodeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private snackBar: MatSnackBar) { }

  form: FormGroup = new FormGroup({
    num: new FormControl(''),
    sales: new FormControl(''),
  }); 
  
  ngOnInit() {
  }

  random(){
    var code = "";
    var character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 7; i++){
      code += character.charAt(Math.floor(Math.random() * character.length));
    }
    return code;
  }

  onSubmit(form){
    for(var i = 0; i< Number(form.num);i++){
      var codes = {
        code: this.random(),
        describes: form.sales
      }
      this.salesService.postData(codes).subscribe();
    }
    this.snackBar.open("Tạo thành công!!!", "Code", {
      duration: 2000,
    }); 
    this.dialogRef.close();
  }

}
