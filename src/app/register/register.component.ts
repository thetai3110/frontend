import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern("[a-zA-Z0-9]*")]),
    pass: new FormControl('', [Validators.required,Validators.minLength(6), Validators.pattern("[a-zA-Z0-9]*")]),
    repass: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern("[a-zA-Z0-9]*")]),
    studentName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    cmnd: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    studentDate: new FormControl(new Date(), [Validators.required]),
    sex: new FormControl('1', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    job: new FormControl(''),
  });

  
  constructor(private loginService: LoginService, private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  onSubmit(form){
    if(form.pass != form.repass){
      this.snackBar.open("Mật khẩu không giống nhau!!!", "Register", {
        duration: 2000,
      });
    }
    else{
      this.loginService.checkAccount(form.username).subscribe(data =>{
        if(Boolean(data)== true){
          this.snackBar.open("Tài khoản đã tồn tại!!!", "Register", {
            duration: 2000,
          });
        }
        else{
          this.loginService.register(form).subscribe(data =>{
            if(data != null){
              this.snackBar.open("Success!!!", "Register", {
                duration: 2000,
              });
              this.router.navigate(['/login']);
            }
            else{
              this.snackBar.open("Đăng ký thất bại!!!", "Register", {
                duration: 2000,
              });
            }
          });
        }
      });
    }
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }
}
