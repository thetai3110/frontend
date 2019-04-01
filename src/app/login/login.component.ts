import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

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

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.loginService.postData(form).subscribe(data => {
      this.status = Boolean(data);
      if (this.status == true) {
        this.onRemember(form.username, form.pass);
        this.router.navigate(['']);
      }
      else alert("Tài khoản hoặc mật khẩu không chính xác!!!");
    });
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
