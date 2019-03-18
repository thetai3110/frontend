import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public account = {
    username : "",
    pass : "",
    name : "",
    cmnd : "",
    date : "",
    sex : "",
    address : "",
    email : "",
    phone : "",
    job : ""
  };

  public repass : "";

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  onSubmit(f){
    this.http.post('http://localhost:8080/login/register', this.account).subscribe(data =>{
      
    });
    console.log(f);
  }

}
