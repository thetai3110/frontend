import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  @Input() courses : {};

  constructor() { }

  ngOnInit() {
  }

}
