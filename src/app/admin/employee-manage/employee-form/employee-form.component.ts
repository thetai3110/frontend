import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  public employee = {
    name : "",
    cmnd : "",
    date : "",
    sex : "",
    address : "",
    email : "",
    phone : "",
    salary : "",
    pos : ""
  };

  constructor() { }

  onSubmit(){
    
  }

  ngOnInit() {
  }

}
