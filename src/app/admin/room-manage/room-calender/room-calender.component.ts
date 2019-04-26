import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { CaService } from 'src/app/services/ca.service';

@Component({
  selector: 'app-room-calender',
  templateUrl: './room-calender.component.html',
  styleUrls: ['./room-calender.component.css']
})
export class RoomCalenderComponent implements OnInit {

  constructor(private caService: CaService) { }

  cas: any;
  month = "01/2019";

  ngOnInit() {
    this.caService.getData().subscribe(data => {
      this.cas = data;
    });
  }

  next() {
    var a;
    var m = Number(this.month.split("/")[0]) + 1;
    var y = Number(this.month.split("/")[1]);
    if (m > 12) {
      m = 1;
      y = Number(this.month.split("/")[1]) + 1;
    }
    if (m < 10) {
      a = "0" + m;
    }else{
      a = m;
    }
    this.month = a + "/" + y;
  }

  prev(){
    var a;
    var m = Number(this.month.split("/")[0]) - 1;
    var y = Number(this.month.split("/")[1]);
    if (m < 1) {
      m = 12;
      y = Number(this.month.split("/")[1]) - 1;
    }
    if (m < 10) {
      a = "0" + m;
    }else{
      a = m;
    }
    this.month = a + "/" + y;
  }

}
