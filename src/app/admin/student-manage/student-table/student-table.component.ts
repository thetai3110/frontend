import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  @Input() students:{}

  constructor() { }

  ngOnInit() {
  }

}
