import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-class-table',
  templateUrl: './class-table.component.html',
  styleUrls: ['./class-table.component.css']
})
export class ClassTableComponent implements OnInit {

  @Input() classes : {};

  constructor() { }

  ngOnInit() {
  }

}
