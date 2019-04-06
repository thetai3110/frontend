import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson-dialog',
  templateUrl: './lesson-dialog.component.html',
  styleUrls: ['./lesson-dialog.component.css']
})
export class LessonDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LessonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private lessonService: LessonService,
    private snackBar: MatSnackBar) { }

    form: FormGroup = new FormGroup({
      idCourse: new FormControl(this.data.stu.idCourse),
      days: new FormControl(this.data.stu.days, [Validators.required]),
      formality: new FormControl(this.data.stu.formality, [Validators.required]),
      title: new FormControl(this.data.stu.title, [Validators.required]),
      content: new FormControl(this.data.stu.content, [Validators.required]),
    });
  
  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  ngOnInit() {
    
  }

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(form){
    this.lessonService.updateData(this.data.stu.idLesson, form).subscribe(data =>{
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
