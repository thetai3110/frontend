import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.css']
})
export class LessonFormComponent implements OnInit {

  constructor(private lessonService: LessonService,
    public dialogRef: MatDialogRef<LessonFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  form: FormGroup = new FormGroup({
    idCourse: new FormControl(this.data.idCourse),
    days: new FormControl('', [Validators.required]),
    formality: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.lessonService.postData(form).subscribe(data => {
      if (data != null) {
        alert('Success!');
        this.dialogRef.close(data['idStudent']);
      }
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

}
