import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassesService } from 'src/app/services/classes.service';
import { LecturersService } from 'src/app/services/lecturers.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    private classesService: ClassesService,
    private lecturersService: LecturersService,
    private snackBar: MatSnackBar) { }

  classes = {};
  isReg = true;
  notReg = true;
  space = ""; roomName = "";
  lecturers = [];

  ngOnInit() {
    this.router.params.subscribe(data => {
      this.lecturersService.getDataById(data.idLec).subscribe(lec => {
        this.lecturers = lec;
      });
      this.classesService.getDataById(data.id).subscribe(rs => {
        if (rs != null) {
          if (rs['lecturers'] == null) {
            this.classes = rs;
            this.space = rs['course'].space;
            this.roomName = rs['room'].roomName;
            this.notReg = false;
          } else {
            this.isReg = false;
          }
        }
      });
    })
  }

  onAccept() {
    this.classes['lecturers'] = this.lecturers;
    this.classesService.updateData1(this.classes['idClass'], this.classes).subscribe(cl => {
      if (cl != null) {
        this.snackBar.open("Success!!!", "Update", {
          duration: 2000,
        });
        this.notReg = true;
        this.isReg = false;
      } else {
        this.snackBar.open("Fail!!!", "Update", {
          duration: 2000,
        });
      }
    });
  }
}
