import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {

  @Input() course = {};
  @Input() level : string;
  @Input() education: string;
  
  constructor() { }

  ngOnInit() {
  }

}
