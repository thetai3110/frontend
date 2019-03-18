import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lecturers-table',
  templateUrl: './lecturers-table.component.html',
  styleUrls: ['./lecturers-table.component.css']
})
export class LecturersTableComponent implements OnInit {

  @Input() lecturers : {};

  constructor() { }

  ngOnInit() {
  }

}
