import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewsService } from 'src/app/services/news.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { CourseService } from 'src/app/services/course.service';
import { UploadService } from 'src/app/services/upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    idCourse: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    describes: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    avatar: new FormControl('')
  }); 

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  constructor(private newService: NewsService,
    private uploadService: UploadService,
    private courseService: CourseService,
    public dialogRef: MatDialogRef<NewsFormComponent>,
    private snackBar: MatSnackBar) { }

  courses: any;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  //
  selectedFiles1: FileList;
  currentFileUpload1: File;
  progress1: { percentage1: number } = { percentage1: 0 };

  ngOnInit() {
    this.courseService.getData().subscribe(data =>{
      this.courses = data;
    });
  }

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(form){
    this.newService.postData(form).subscribe(data =>{
      if (data != null) {
        if (this.selectedFiles != null) {
          this.onUpload();
        }
        if (this.selectedFiles1 != null) {
          this.onUpload1();
        }
        this.snackBar.open("Đã thêm 1 tin tức thành công!!!", "Add", {
          duration: 2000,
        });
      } else {
        this.snackBar.open("Fail!!!", "Add", {
          duration: 2000,
        });
      }
      this.onCancel();
    });
  }

  onFileSelected(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
  }

  onUpload() {
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

  onFileSelected1(event) {
    this.selectedFiles1 = event.target.files;
    console.log(this.selectedFiles1);
  }

  onUpload1() {
    this.progress1.percentage1 = 0;
    this.currentFileUpload1 = this.selectedFiles1.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload1).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress1.percentage1 = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles1 = undefined;
  }

}
