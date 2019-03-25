import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  @Input('list-class') classes : {};
  @Input() course = {};
  @Input() level : string;
  
  constructor() { }

  ngOnInit() {
    
  }

}
