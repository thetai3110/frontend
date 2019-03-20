import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-manage',
  templateUrl: './student-manage.component.html',
  styleUrls: ['./student-manage.component.css']
})
export class StudentManageComponent implements OnInit {

  faPlusCircle = faPlusCircle;

  students: {};

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudent();
  }

  getStudent(){
    this.studentService.getData().subscribe(data =>{
      this.students = data;
    });
  } 

}
