import { Component, OnInit } from '@angular/core';
import { LecturersService } from '../../services/lecturers.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lecturers-manage',
  templateUrl: './lecturers-manage.component.html',
  styleUrls: ['./lecturers-manage.component.css']
})
export class LecturersManageComponent implements OnInit {

  faPlusCircle = faPlusCircle;

  lecturers: {};

  constructor(private lecturersService: LecturersService) { }

  ngOnInit() {
    this.getLecturers();
  }

  getLecturers(){
    this.lecturersService.getData().subscribe(data =>{
      this.lecturers = data;
    });
  }

}
