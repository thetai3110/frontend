import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lecturers-manage',
  templateUrl: './lecturers-manage.component.html',
  styleUrls: ['./lecturers-manage.component.css']
})
export class LecturersManageComponent implements OnInit {

  faPlusCircle = faPlusCircle;

  constructor() { }

  ngOnInit() {
  }
  
}
