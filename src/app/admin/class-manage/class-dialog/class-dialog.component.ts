import { Component, OnInit, Inject, Pipe, PipeTransform } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClassesService } from 'src/app/services/classes.service';
import { LecturersService } from 'src/app/services/lecturers.service';
import { CourseService } from 'src/app/services/course.service';
import { RoomService } from 'src/app/services/room.service';
import { SchooldayService } from 'src/app/services/schoolday.service';
import { CaService } from 'src/app/services/ca.service';

@Component({
  selector: 'app-class-dialog',
  templateUrl: './class-dialog.component.html',
  styleUrls: ['./class-dialog.component.css']
})
export class ClassDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ClassDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private classesService: ClassesService,
    private lecturersService: LecturersService,
    private courseService: CourseService,
    private schooldayService: SchooldayService,
    private caService: CaService,
    private roomService: RoomService) { }

  form: FormGroup = new FormGroup({
    idRoom: new FormControl(this.data.stu.room != null ? this.data.stu.room.idRoom : '', [Validators.required]),
    idCourse: new FormControl(this.data.stu.course != null ? this.data.stu.course.idCourse : '', [Validators.required]),
    idLecturers: new FormControl(this.data.stu.lecturers != null ? this.data.stu.lecturers.idLecturers : '', [Validators.required]),
    className: new FormControl(this.data.stu.className, [Validators.required]),
    size: new FormControl(this.data.stu.size, [Validators.required, Validators.pattern("[0-9]*")]),
    minSize: new FormControl(this.data.stu.minSize, [Validators.required, Validators.pattern("[0-9]*")]),
    maxSize: new FormControl(this.data.stu.maxSize, [Validators.required, Validators.pattern("[0-9]*")]),
    status: new FormControl(String(this.data.stu.status), [Validators.required, Validators.pattern("[0-9]*")])
  });

  allCourse: any; allLec: any; allRoom: any; allSchoolDay: any; allCa: any;
  allNoEmpty: any; allByClass: any; allByRoom: any;
  cas = []; schoolDays = []; emptys = []; noEmptys = [];
  days = []; classDay = []; checkChange = false;
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  ngOnInit() {
    this.courseService.getData().subscribe(data => {
      this.allCourse = data;
    });
    this.lecturersService.getData().subscribe(data => {
      this.allLec = data;
    });
    this.roomService.getData().subscribe(data => {
      this.allRoom = data;
    });
    this.caService.getData().subscribe(data => {
      this.allCa = data;
      for (var i = 0; i < this.allCa.length; i++) {
        this.cas.push(this.allCa[i].idCa);
      }
    });
    this.schooldayService.getData().subscribe(data => {
      this.allSchoolDay = data;
      for (var i = 0; i < this.allSchoolDay.length; i++) {
        this.schoolDays.push(this.allSchoolDay[i].idSchoolDay);
      }
    });
    this.classesService.getClassDayByClass(this.data.stu.idClass).subscribe(data => {
      if (data != null) {
        this.allByClass = data;
        for (var i = 0; i < this.allByClass.length; i++) {
          this.days.push(this.allByClass[i].idSchoolday + "-" + this.allByClass[i].idCa);
          this.classDay.push(this.allByClass[i].idClassDay);
        }
      }
    });
  }

  getEmptys(idRoom) {
    this.noEmptys = [];
    this.emptys = [];
    this.classesService.getClassDayByRoom(idRoom).subscribe(data => {
      if (data != null) {
        //Nếu phòng học có ca học
        this.allByRoom = data;
        //Danh sách các ca đã có lớp
        for (var i = 0; i < this.allByRoom.length; i++) {
          this.noEmptys.push(this.allByRoom[i].idSchoolday + "-" + this.allByRoom[i].idCa + "-f");
        }
        this.classesService.getClassDayByClass(this.data.stu.idClass).subscribe(data1 => {
          if (data1 != null) {
            //Nếu lớp học đã có ca học
            this.allByClass = data1;
            //-f là các ca còn trống , -t là các ca của lớp muốn sửa
            for (let i = 0; i < this.schoolDays.length; i++) {
              for (let j = 0; j < this.cas.length; j++) {
                var key = this.schoolDays[i] + "-" + this.cas[j];
                var ck = 0;
                for (var k = 0; k < this.allByClass.length; k++) {
                  if (key == this.allByClass[k].idSchoolday + '-' + this.allByClass[k].idCa) {
                    ck = 1;
                  }
                }
                if (ck == 0) {
                  key = this.schoolDays[i] + "-" + this.cas[j] + "-f";
                  this.emptys.push(key);
                } else {
                  key = this.schoolDays[i] + "-" + this.cas[j] + "-f";
                  this.emptys.push(key);
                  key = this.schoolDays[i] + "-" + this.cas[j] + "-t";
                  this.emptys.push(key);
                }
              }
            }
            //Danh sách các ca trống
            for (let k = 0; k < this.noEmptys.length; k++) {
              var pos = this.emptys.indexOf(this.noEmptys[k]);
              this.emptys.splice(pos, 1);
            }
          } else {
            //Nếu lớp không có ca học
            for (let i = 0; i < this.schoolDays.length; i++) {
              for (let j = 0; j < this.cas.length; j++) {
                key = this.schoolDays[i] + "-" + this.cas[j] + "-f";
                this.emptys.push(key);
              }
            }
            //Danh sách các ca trống
            for (let k = 0; k < this.noEmptys.length; k++) {
              var pos = this.emptys.indexOf(this.noEmptys[k]);
              this.emptys.splice(pos, 1);
            }
          }
        });
      } else {
        //Nếu phòng học không có ca học
        for (let i = 0; i < this.schoolDays.length; i++) {
          for (let j = 0; j < this.cas.length; j++) {
            var key = this.schoolDays[i] + "-" + this.cas[j] + "-f";
            this.emptys.push(key);
          }
        }
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.classesService.updateData(this.data.stu.idClass, form).subscribe(data => {
      if (data != null) {
        if (this.checkChange == true) {
          //Xóa class-day cũ
          for (var i = 0; i < this.classDay.length; i++) {
            this.classesService.deleteClassDay(this.classDay[i]).subscribe();
          }
          //Thêm class-day mới
          for (var i = 0; i < this.days.length; i++) {
            var classDayTmp = {
              idClass: this.data.stu.idClass,
              idSchoolday: this.days[i].charAt(0),
              idCa: this.days[i].charAt(2)
            }
            this.classesService.addClassDay(classDayTmp).subscribe();
          }
        } else {
          //Update lại class-day
          for (var i = 0; i < this.days.length; i++) {
            var classDay = {
              idClass: this.data.stu.idClass,
              idSchoolday: this.days[i].charAt(0),
              idCa: this.days[i].charAt(2)
            }
            this.classesService.updateClassDay(classDay, this.classDay[i]).subscribe();
          }
        }
        setTimeout(() => {
          alert("success");
          this.onCancel();
        }, 1000);
      }
    });
  }

  changeCk(ca, event) {
    this.checkChange = true;
    if (event.checked == true) {
      this.days.push(ca.charAt(0) + '-' + ca.charAt(2));
    } else {
      var pos = this.days.indexOf(ca.charAt(0) + '-' + ca.charAt(2));
      this.days.splice(pos, 1);
    }
  }
}
