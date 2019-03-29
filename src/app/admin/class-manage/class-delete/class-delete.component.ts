import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClassesService } from 'src/app/services/classes.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-class-delete',
  templateUrl: './class-delete.component.html',
  styleUrls: ['./class-delete.component.css']
})
export class ClassDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ClassDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private classesService: ClassesService,
    private studentService: StudentService) { }

  classDays = [];

  ngOnInit() {
    this.classesService.getClassDayByClass(this.data.id).subscribe(data =>{
      for(var i=0;i<=Array(data).length;i++){
        this.classDays.push(data[i].idClassDay);
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onDel(id) {
    if (this.data.title == 1) {
      this.classesService.deleteData(id).subscribe(data => {
        if (String(data) === "true") {
          for(var i=0;i<this.classDays.length;i++){
            this.classesService.deleteClassDay(this.classDays[i]).subscribe();
          }
          alert("success");
          this.onCancel();
        } else {
          console.log(data);
        }
      });
    }else{
      this.studentService.leaveClass(id).subscribe(data => {
        if (String(data) === "true") {
          this.onCancel();
        } else {
          console.log(data);
        }
      });
    }
  }

}
