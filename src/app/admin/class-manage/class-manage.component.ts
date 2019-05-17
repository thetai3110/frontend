import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-class-manage',
  templateUrl: './class-manage.component.html',
  styleUrls: ['./class-manage.component.css']
})
export class ClassManageComponent implements OnInit {

  classes : {};

  constructor() { }

  ngOnInit() {
  }

}
