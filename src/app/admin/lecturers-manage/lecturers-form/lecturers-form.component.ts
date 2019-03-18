import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecturers-form',
  templateUrl: './lecturers-form.component.html',
  styleUrls: ['./lecturers-form.component.css']
})
export class LecturersFormComponent implements OnInit {

  public lecturers = {
    name : "",
    cmnd : "",
    date : "",
    sex : "",
    address : "",
    email : "",
    phone : "",
    idMajors : "",
    salary : ""
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

  }
}
