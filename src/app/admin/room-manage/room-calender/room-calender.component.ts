import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { CaService } from 'src/app/services/ca.service';
import { ClassesService } from 'src/app/services/classes.service';
import { SchooldayService } from 'src/app/services/schoolday.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-calender',
  templateUrl: './room-calender.component.html',
  styleUrls: ['./room-calender.component.css']
})
export class RoomCalenderComponent implements OnInit {

  constructor(private caService: CaService,
    private classesService: ClassesService,
    private schooldayService: SchooldayService,
    private roomService: RoomService) { }

  cas: any;
  schoolday: any;
  month = "01/2019";
  datas: any;
  classDays = [];
  allRoom: any;

  ngOnInit() {
    this.roomService.getData().subscribe(rooms => {
      this.allRoom = rooms;
      for (var i = 0; i < this.allRoom.length; i++) {
        this.getCalender(this.allRoom[i].idRoom);
      }
    });
  }

  getCalender(idRoom) {
    var classDay = [];
    this.caService.getData().subscribe(data => {
      this.cas = data;
      this.schooldayService.getData().subscribe(data1 => {
        this.schoolday = data1;
        this.classesService.getClassDayByRoom(idRoom).subscribe(data2 => {
          this.datas = data2;
          for (let i = 0; i < this.schoolday.length; i++) {
            for (let j = 0; j < this.cas.length; j++) {
              var key = this.schoolday[i].idSchoolDay + "-" + this.cas[j].idCa;
              var ck = 0;
              var name = "";
              for (var k = 0; k < this.datas.length; k++) {
                if (key == this.datas[k].idSchoolday + "-" + this.datas[k].idCa) {
                  ck = 1;
                  name = this.datas[k].className;
                }
              }
              if (ck == 0) {
                key = this.schoolday[i].idSchoolDay + "-" + this.cas[j].idCa + "-f";
                classDay.push(key);
              } else {
                key = this.schoolday[i].idSchoolDay + "-" + this.cas[j].idCa + "-f";
                classDay.push(key);
                key = this.schoolday[i].idSchoolDay + "-" + this.cas[j].idCa + "-t-"+ name;
                classDay.push(key);
              }
            }
          }
          //Danh sách
          for (let k = 0; k < this.datas.length; k++) {
            var pos = classDay.indexOf(this.datas[k].idSchoolday + "-" + this.datas[k].idCa + "-f");
            classDay.splice(pos, 1);
          }
          this.classDays.push(classDay);
        });
      });
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
    } else {
      a = m;
    }
    this.month = a + "/" + y;
  }

  prev() {
    var a;
    var m = Number(this.month.split("/")[0]) - 1;
    var y = Number(this.month.split("/")[1]);
    if (m < 1) {
      m = 12;
      y = Number(this.month.split("/")[1]) - 1;
    }
    if (m < 10) {
      a = "0" + m;
    } else {
      a = m;
    }
    this.month = a + "/" + y;
  }

}
