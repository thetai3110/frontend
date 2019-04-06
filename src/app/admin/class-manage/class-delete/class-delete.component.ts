import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
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
    private studentService: StudentService,
    private snackBar: MatSnackBar) { }

  classDaysTmp : any;
  classDays = [];

  ngOnInit() {
    this.classesService.getClassDayByClass(this.data.id).subscribe(data =>{
      if(data != null){
        this.classDaysTmp = data;
        for(var i=0;i<this.classDaysTmp.length;i++){
          this.classDays.push(this.classDaysTmp[i].idClassDay);
        }
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
          this.snackBar.open("Success!!!", "Delete", {
            duration: 2000,
          }); 
        } else {
          this.snackBar.open("Fail!!!", "Delete", {
            duration: 2000,
          });
        }
        this.onCancel();
      });
    }else{
      this.studentService.leaveClass(id).subscribe(data => {
        if (String(data) === "true") {
          this.snackBar.open("Success!!!", "Leave", {
            duration: 2000,
          });
        } else {
          this.snackBar.open("Fail!!!", "Leave", {
            duration: 2000,
          });
        }
        this.onCancel();
      });
    }
  }

}
