import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';
import { AccountService } from 'src/app/services/account.service';
import { ClassesService } from 'src/app/services/classes.service';
import { LecturersService } from 'src/app/services/lecturers.service';
import { CourseService } from 'src/app/services/course.service';
import { RoomService } from 'src/app/services/room.service';

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
    private roomService: RoomService) { }

    form: FormGroup = new FormGroup({
      idRoom: new FormControl(this.data.stu.room != null ? this.data.stu.room.idRoom : '', [Validators.required]),
      idCourse: new FormControl(this.data.stu.course != null ? this.data.stu.course.idCourse : '', [Validators.required]),
      idLecturers: new FormControl(this.data.stu.lecturers != null ? this.data.stu.lecturers.idLecturers : '', [Validators.required]),
      className: new FormControl(this.data.stu.className, [Validators.required]),
      size: new FormControl(this.data.stu.size,[Validators.required, Validators.pattern("[0-9]*")]),
      minSize: new FormControl(this.data.stu.minSize, [Validators.required, Validators.pattern("[0-9]*")]),
      maxSize: new FormControl(this.data.stu.maxSize, [Validators.required, Validators.pattern("[0-9]*")]),
      status: new FormControl(String(this.data.stu.status), [Validators.required, Validators.pattern("[0-9]*")]),
    }); 
  
    allCourse: any; allLec: any; allRoom: any;

    public hasError = (controlName: string, errorName: string) =>{
      return this.form.controls[controlName].hasError(errorName);
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
  
    onCancel(){
      this.dialogRef.close();
    }
  
    onSubmit(form){
      this.classesService.updateData(this.data.stu.idClass, form).subscribe(data =>{
        if(data != null){
          alert("success");
          this.onCancel();
        }
    });
    }

}
