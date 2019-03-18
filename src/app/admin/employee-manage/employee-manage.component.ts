import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.css']
})
export class EmployeeManageComponent implements OnInit {

  faPlusCircle = faPlusCircle;

  employees : {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.http.get('http://localhost:8080/employee').subscribe(data =>{
      this.employees = data;
    });
  }

}
