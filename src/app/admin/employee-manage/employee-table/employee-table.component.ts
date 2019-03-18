import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  @Input() employees :{};

  constructor() { }

  ngOnInit() {
  }

}
