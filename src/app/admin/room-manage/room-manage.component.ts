import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-room-manage',
  templateUrl: './room-manage.component.html',
  styleUrls: ['./room-manage.component.css']
})
export class RoomManageComponent implements OnInit {

  rooms: {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.http.get('http://localhost:8080/room').subscribe(data =>{
      this.rooms = data;
    });
  }

}
