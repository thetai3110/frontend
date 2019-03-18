import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-student-manage',
  templateUrl: './student-manage.component.html',
  styleUrls: ['./student-manage.component.css']
})
export class StudentManageComponent implements OnInit {

  faPlusCircle = faPlusCircle;

  students: {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.http.get('http://localhost:8080/student').subscribe(data =>{
      this.students = data;
    });
  }

}
