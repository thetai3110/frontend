import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../../services/upload.service';
import { CourseService } from '../../../services/course.service';
import { LevelService } from '../../../services/level.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})

export class CourseFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    course: new FormControl('', [Validators.required]),
    idLevel: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    dayStart: new FormControl(new Date(), [Validators.required]),
    space: new FormControl('', [Validators.required]),
    sale: new FormControl(''),
    conditions: new FormControl(''),
    describes: new FormControl(''),
    fee: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    status: new FormControl('1', [Validators.required]),
    image: new FormControl(''),
  }); 

  public allLevel : {};
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private levelService: LevelService, 
              private uploadService: UploadService,
              private courseService: CourseService,
              public dialogRef: MatDialogRef<CourseFormComponent>,
              private snackBar: MatSnackBar) { }
              
  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  ngOnInit() {
    this.getLevel();
  }

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(form){
    this.courseService.postData(form).subscribe(data =>{
      if(data!= null){
        if(this.selectedFiles != null){
          this.onUpload();
        }
        this.snackBar.open("Success!!!", "Add", {
          duration: 2000,
        });
      }else{
        this.snackBar.open("Fail!!!", "Add", {
          duration: 2000,
        });
      }
      this.onCancel();
    });
    console.log(form);
    
  }

  getLevel(){
    this.levelService.getData().subscribe(data =>{
      if(data != null)
        this.allLevel = data;
    });
  }

  onFileSelected(event){
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
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
