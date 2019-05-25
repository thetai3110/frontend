import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-manage',
  templateUrl: './room-manage.component.html',
  styleUrls: ['./room-manage.component.css']
})
export class RoomManageComponent implements OnInit {

  rooms: {};

  constructor(private http: HttpClient, private router: Router) { }

  roles = "";
  ngOnInit() {
    if (localStorage.getItem("roles") != null) {
      this.roles = localStorage.getItem("roles");
      if (this.roles != "Admin" && this.roles != "Class" && this.roles != "Educate") {
        this.router.navigate([""]);
      }
    }

    this.getData();
  }

  getData(){
    this.http.get('http://localhost:8080/room').subscribe(data =>{
      this.rooms = data;
    });
  }

}
