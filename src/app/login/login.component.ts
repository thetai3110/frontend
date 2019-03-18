import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public account = {
    username : "",
    pass : ""
  };

  status : string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit(){
    this.http.post('http://localhost:8080/login', this.account).subscribe(data =>{
      this.status = String(data);
      if(this.status == "true")
        this.router.navigate(['']);
    });
  }
}
