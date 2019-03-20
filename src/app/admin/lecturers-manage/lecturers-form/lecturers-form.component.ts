import { Component, OnInit } from '@angular/core';
import { LecturersService } from '../../../services/lecturers.service';
import { MajorsService } from '../../../services/majors.service';

@Component({
  selector: 'app-lecturers-form',
  templateUrl: './lecturers-form.component.html',
  styleUrls: ['./lecturers-form.component.css']
})
export class LecturersFormComponent implements OnInit {

  public lecturers = {
    lecturersName : "",
    cmnd : "",
    lecturersDate : "",
    sex : "",
    address : "",
    email : "",
    phone : "",
    idMajors : "",
    salary : ""
  };

public allMajors : {};

  constructor(private lecturersService: LecturersService,
              private majorsService: MajorsService) { }

  ngOnInit() {
    this.getMajors();
  }

  onSubmit(){
    this.lecturersService.postData(this.lecturers).subscribe(data =>{
      if(data!= null){
        alert('Success!');
      }
    });
  }

  getMajors(){
    this.majorsService.getData().subscribe(data =>{
      this.allMajors = data;
    });
  }

}
