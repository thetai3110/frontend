import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

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

  
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit(form){
    if(form.pass != form.repass)
      alert("Mật khẩu không giống nhau!!!");
    else{
      this.loginService.checkAccount(form.username).subscribe(data =>{
        if(Boolean(data)== true)
          alert("Tài khoản đã tồn tại");
        else{
          this.loginService.register(form).subscribe(data =>{
            if(data != null)
              this.router.navigate(['/login']);
            else
              alert("Đăng ký thất bại");
          });
        }
      });
    }
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }
}
