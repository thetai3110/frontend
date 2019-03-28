import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';
import { LecturersService } from 'src/app/services/lecturers.service';
import { ClassesService } from 'src/app/services/classes.service';
import { RoomService } from 'src/app/services/room.service';
import { MatDialogRef } from '@angular/material';

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
    size: new FormControl('',[Validators.required, Validators.pattern("[0-9]*")]),
    minSize: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    maxSize: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    status: new FormControl('0', [Validators.required, Validators.pattern("[0-9]*")]),
  }); 

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  constructor(private classesService: ClassesService,
    private lecturersService: LecturersService,
    private courseService: CourseService,
    private roomService: RoomService,
    public dialogRef: MatDialogRef<ClassFormComponent>) { }

  allCourse: any; allLec: any; allRoom: any;

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(form){
    this.classesService.postData(form).subscribe(data =>{
      if(data!= null){
        alert('Success!');
        this.onCancel();
      }
    });
  }

  ngOnInit() {
    this.courseService.getData().subscribe(data=>{
      this.allCourse = data;
    });
    this.lecturersService.getData().subscribe(data=>{
      this.allLec = data;
    });
    this.roomService.getData().subscribe(data=>{
      this.allRoom = data;
    });
  }

}
