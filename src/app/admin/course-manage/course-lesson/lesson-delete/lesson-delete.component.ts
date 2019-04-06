import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson-delete',
  templateUrl: './lesson-delete.component.html',
  styleUrls: ['./lesson-delete.component.css']
})
export class LessonDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LessonDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private lessonService: LessonService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onCancel(){
    this.dialogRef.close();
  }

  onDel(id){
    this.lessonService.deleteData(id).subscribe(data =>{
      if(String(data) === "true"){
        this.snackBar.open("Success!!!", "Delete", {
          duration: 2000,
        });
      }else{
        this.snackBar.open("Fail!!!", "Delete", {
          duration: 2000,
        });
      }
      this.onCancel();
    });
  }

}
