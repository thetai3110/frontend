import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';
import { LecturersService } from 'src/app/services/lecturers.service';
import { ClassesService } from 'src/app/services/classes.service';
import { RoomService } from 'src/app/services/room.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { SchooldayService } from 'src/app/services/schoolday.service';
import { CaService } from 'src/app/services/ca.service';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    idRoom: new FormControl('1', [Validators.required]),
    idCourse: new FormControl('', [Validators.required]),
    idLecturers: new FormControl(''),
    className: new FormControl('', [Validators.required]),
    dayStart: new FormControl('', [Validators.required]),
    size: new FormControl('0'),
    minSize: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    maxSize: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    status: new FormControl('0', [Validators.required, Validators.pattern("[0-9]*")]),
    caculator: new FormControl('')
  });

  constructor(private classesService: ClassesService,
    private courseService: CourseService,
    private roomService: RoomService,
    private schooldayService: SchooldayService,
    private caService: CaService,
    public dialogRef: MatDialogRef<ClassFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar) { }

  allCourse: any; allLec: any; allRoom: any; allSchoolDay: any; allCa: any;
  allNoEmpty: any; allByClass: any; allByRoom: any;
  days = []; cas = []; schoolDays = []; emptys = []; noEmptys = [];

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  ngOnInit() {
    this.courseService.getData().subscribe(data => {
      this.allCourse = data;
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
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.classesService.postData(form).subscribe(data => {
      if (data != null) {
        for (var i = 0; i < this.days.length; i++) {
          var str = this.days[i].split("-");
          var classDay = {
            idClass: data['idClass'],
            idSchoolday: str[0],
            idCa: str[1]
          }
          this.classesService.addClassDay(classDay).subscribe();
        }
        setTimeout(() => {
          this.snackBar.open("Success!!!", "Add", {
            duration: 1500,
          });
          this.onCancel();
        }, 2000);
      } else {
        this.snackBar.open("Fail!!!", "Add", {
          duration: 2000,
        });
        this.onCancel();
      }
    });
  }

  getEmptys(idRoom) {
    this.noEmptys = [];
    this.emptys = [];
    this.classesService.getClassDayByRoom(idRoom).subscribe(data => {
      this.allByRoom = data;
      //Danh sách các ca học đã có lớp 
      for (var i = 0; i < this.allByRoom.length; i++) {
        this.noEmptys.push(this.allByRoom[i].idSchoolday + "-" + this.allByRoom[i].idCa);
      }
      //Danh sách tất cả các ca
      for (let i = 0; i < this.schoolDays.length; i++) {
        for (let j = 0; j < this.cas.length; j++) {
          var key = this.schoolDays[i] + "-" + this.cas[j];
          this.emptys.push(key);
        }
      }
      //Danh sách ca còn trống
      for (let k = 0; k < this.noEmptys.length; k++) {
        var pos = this.emptys.indexOf(this.noEmptys[k]);
        this.emptys.splice(pos, 1);
      }
    });
  }

  changeCk(ca, event) {
    if (event.checked == true) {
      this.days.push(ca);
    } else {
      var pos = this.days.indexOf(ca);
      this.days.splice(pos, 1);
    }
    console.log(this.days);
  }
  
}
