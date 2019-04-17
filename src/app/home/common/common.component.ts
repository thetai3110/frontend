import { Component, OnInit } from '@angular/core';
import { faUsers, faEye, faTasks, faEdit, faKeyboard, faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  constructor() { }

  faUsers = faUsers; faEye = faEye; faTasks = faTasks;
  faEdit = faEdit; faKeyboard = faKeyboard; faBook = faBook;

  ngOnInit() {
  }

}
