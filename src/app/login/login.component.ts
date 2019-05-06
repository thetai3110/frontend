import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogOutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("username") != null && localStorage.getItem("pass") != null){
      localStorage.removeItem("username");
      localStorage.removeItem("pass");
      this.router.navigate(["/login"]);
    }
  }

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required])
  });

  status: boolean;

  constructor(private loginService: LoginService, private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(form) {
    // this.loginService.postData(form).subscribe(data => {
    //   this.status = Boolean(data);
    //   if (this.status == true) {
    //     this.onRemember(form.username, form.pass);
    //     this.router.navigate(['']);
    //     this.snackBar.open("Success!!!", "Login", {
    //       duration: 2000,
    //     });
    //   }
    //   else{
    //     this.snackBar.open("Tài khoản hoặc mật khẩu không chính xác!!!", "Login", {
    //       duration: 2000,
    //     });
    //   }
    // });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  onRemember(username, pass) {
    if (localStorage.getItem("username") != username && localStorage.getItem("pass") != pass) {
      localStorage.setItem("username", username);
      localStorage.setItem("pass", pass);
    }
  }
}
