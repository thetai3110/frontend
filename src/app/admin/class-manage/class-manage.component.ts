import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-class-manage',
  templateUrl: './class-manage.component.html',
  styleUrls: ['./class-manage.component.css']
})
export class ClassManageComponent implements OnInit {

  classes : {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.http.get('http://localhost:8080/class').subscribe(data =>{
      this.classes = data;
    });
  }

}
