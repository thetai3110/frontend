import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CourseService } from '../../../services/course.service';
import { LevelService } from 'src/app/services/level.service';
import { UploadService } from 'src/app/services/upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private courseService: CourseService,
    private levelService: LevelService,
    private uploadService: UploadService,
    private snackBar: MatSnackBar) { }

    form: FormGroup = new FormGroup({
      course: new FormControl(this.data.stu.course, [Validators.required]),
      idLevel: new FormControl(this.data.stu != null? this.data.stu.level.idLevel : '', [Validators.required]),
      duration: new FormControl(this.data.stu.duration, [Validators.required]),
      dayStart: new FormControl(new Date(this.data.stu.dayStart), [Validators.required]),
      space: new FormControl(this.data.stu.space, [Validators.required]),
      sale: new FormControl(this.data.stu.sale),
      conditions: new FormControl(this.data.stu.conditions),
      describes: new FormControl(this.data.stu.describes),
      fee: new FormControl(this.data.stu.fee, [Validators.required, Validators.pattern("[0-9]*")]),
      status: new FormControl(String(this.data.stu.status), [Validators.required]),
      image: new FormControl('')
    }); 
  
    allLevel : any;
    selectedFiles: FileList;
    currentFileUpload: File;
    progress: { percentage: number } = { percentage: 0 };

    public hasError = (controlName: string, errorName: string) =>{
      return this.form.controls[controlName].hasError(errorName);
    }
  
    ngOnInit() {
      this.levelService.getData().subscribe(data=>{
        if(data != null)
          this.allLevel = data;
      })
    }
  
    onCancel(){
      this.dialogRef.close();
    }
  
    onSubmit(form){
      this.courseService.updateData(form,this.data.stu.idCourse).subscribe(data =>{
        if(data!= null){
          if(this.selectedFiles != null){
            this.onUpload();
          }
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

    onFileSelected(event){
      this.selectedFiles = event.target.files;
    }
  
    onUpload(){
      this.progress.percentage = 0;
      this.currentFileUpload = this.selectedFiles.item(0);
      this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');
        }
      });
      this.selectedFiles = undefined;
    }
}
