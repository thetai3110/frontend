import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  public student = {
    studentName : "",
    cmnd : "",
    studentDate : "",
    sex : "",
    address : "",
    email : "",
    phone : "",
    job : ""
  };

  constructor(private http: HttpClient) { }

  onSubmit(){
    this.http.post('http://localhost:8080/student/add', this.student).subscribe(data =>{
      if(data!= null){
        alert('Success!');
      }
    });
  }

  ngOnInit() {
  }
}
