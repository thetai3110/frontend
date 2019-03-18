import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lecturers-manage',
  templateUrl: './lecturers-manage.component.html',
  styleUrls: ['./lecturers-manage.component.css']
})
export class LecturersManageComponent implements OnInit {

  faPlusCircle = faPlusCircle;

  lecturers: {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.http.get('http://localhost:8080/lecturers').subscribe(data =>{
      this.lecturers = data;
    });
  }

}
