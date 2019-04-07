import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  username = localStorage.getItem("username");
  idStudent: Number;
  student = {};

  ngOnInit() {
    this.studentService.getDataByUsername(localStorage.getItem("username")).subscribe(data => {
      if (data != null) {
        this.idStudent = data['idStudent'];
        this.student = data;
      }
    });
  }

}
