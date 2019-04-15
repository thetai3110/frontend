import { Component, OnInit, Inject } from '@angular/core';
import { ExamService } from 'src/app/services/exam.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-exam-delete',
  templateUrl: './exam-delete.component.html',
  styleUrls: ['./exam-delete.component.css']
})
export class ExamDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExamDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private examService: ExamService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onCancel(){
    this.dialogRef.close();
  }

  onDel(id){
    this.examService.deleteData(id).subscribe(data =>{
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
    })
  }

}
