import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  @Input() course = {};
  @Input() level : string;

  constructor() { }

  ngOnInit() {
  }

}
