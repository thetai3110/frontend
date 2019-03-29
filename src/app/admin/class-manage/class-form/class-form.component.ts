import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';
import { LecturersService } from 'src/app/services/lecturers.service';
import { ClassesService } from 'src/app/services/classes.service';
import { RoomService } from 'src/app/services/room.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SchooldayService } from 'src/app/services/schoolday.service';
import { CaService } from 'src/app/services/ca.service';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    idRoom: new FormControl('', [Validators.required]),
    idCourse: new FormControl('', [Validators.required]),
    idLecturers: new FormControl('', [Validators.required]),
    className: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    minSize: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    maxSize: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    status: new FormControl('0', [Validators.required, Validators.pattern("[0-9]*")]),
    caculator: new FormControl('', [Validators.required])
  });

  constructor(private classesService: ClassesService,
    private lecturersService: LecturersService,
    private courseService: CourseService,
    private roomService: RoomService,
    private schooldayService: SchooldayService,
    private caService: CaService,
    public dialogRef: MatDialogRef<ClassFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  allCourse: any; allLec: any; allRoom: any; allSchoolDay: any; allCa: any;

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }
  
  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.classesService.postData(form).subscribe(data =>{
      if(data!= null){
        for(var i=0;i< this.days.length;i++){
          var classDay = {
            idClass : data['idClass'],
            idSchoolday: this.days[i].charAt(0),
            idCa: this.days[i].charAt(2)
          }
          this.classesService.addClassDay(classDay).subscribe();
        }
      }
    });
    alert('Success!');
    this.onCancel();
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
    });
    this.schooldayService.getData().subscribe(data => {
      this.allSchoolDay = data;
    });
  }

  days = [];

  changeCk(sd, ca, event) {
    if (event.checked == true) {
      this.days.push(sd + "-" + ca);
    } else {
      var pos = this.days.indexOf(sd + "-" + ca);
      this.days.splice(pos, 1);
    }
  }
}
