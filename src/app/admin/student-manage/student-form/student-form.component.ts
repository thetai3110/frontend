import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';

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

  constructor(private studentService: StudentService) { }

  onSubmit(){
    this.studentService.postData(this.student).subscribe(data =>{
      if(data!= null){
        alert('Success!');
      }
    });
  }

  ngOnInit() {
  }
}
