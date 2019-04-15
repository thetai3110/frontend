import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ClassesService } from 'src/app/services/classes.service';
import { ExamService } from 'src/app/services/exam.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-exam-dialog',
  templateUrl: './exam-dialog.component.html',
  styleUrls: ['./exam-dialog.component.css']
})
export class ExamDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private examService: ExamService,
    private classesService: ClassesService, private snackBar: MatSnackBar) { }

    form: FormGroup = new FormGroup({
      idClass: new FormControl(this.data.stu.clazz != null ? this.data.stu.clazz.idClass : ''),
      dayExam: new FormControl(new Date(this.data.stu.dayExam), [Validators.required]),
      timeExam: new FormControl(this.data.stu.timeExam, [Validators.required]),
      duration: new FormControl(this.data.stu.duration,[Validators.required]),
      status: new FormControl(String(this.data.stu.status), [Validators.required])
    }); 
  
    allClass : any;

    public hasError = (controlName: string, errorName: string) =>{
      return this.form.controls[controlName].hasError(errorName);
    }
  
    ngOnInit() {
      this.classesService.getData().subscribe(data=>{
        if(data != null)
          this.allClass = data;
      })
    }
  
    onCancel(){ 
      this.dialogRef.close();
    }
  
    onSubmit(form){
      this.examService.updateData(this.data.stu.idExam, form).subscribe(data =>{
        if(data != null){
          this.snackBar.open("Success!!!", "Update", {
            duration: 2000,
          });
        }else{
          this.snackBar.open("Fail!!!", "Update", {
            duration: 2000,
          });
        }
        this.onCancel();
    });
    }

}
