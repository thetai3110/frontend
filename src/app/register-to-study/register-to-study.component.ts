import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-to-study',
  templateUrl: './register-to-study.component.html',
  styleUrls: ['./register-to-study.component.css']
})
export class RegisterToStudyComponent implements OnInit {

  public student = {
    name : "",
    cmnd : "",
    date : "",
    sex : "",
    address : "",
    email : "",
    phone : "",
    job : "",
    idClass : 0,
  };

  public classes;
  public isRegister;

  constructor(private http: HttpClient,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data =>{
      this.student.idClass = data.id;
    });
    this.getData();
  }

  onSubmit(){
    this.http.post('http://localhost:8080/register-to-study', this.student).subscribe(data =>{
      console.log(data);
      this.isRegister = Number(data);
    });
  }

  getData(){
    this.http.get('http://localhost:8080/class/follow-id/'+this.student.idClass).subscribe(data =>{
      this.classes = data['className'] + " khóa học " + data['course'].course + " - " + data['course']['level'].level;
    });
  }

}
