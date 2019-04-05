import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-registered',
  templateUrl: './list-registered.component.html',
  styleUrls: ['./list-registered.component.css']
})
export class ListRegisteredComponent implements OnInit {

  @Input() idStudent: Number;
  
  constructor() { }

  ngOnInit() {
  }

}
