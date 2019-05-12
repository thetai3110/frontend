import { Component, OnInit, Inject } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { NewsService } from 'src/app/services/news.service';
import { UploadService } from 'src/app/services/upload.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-news-dialog',
  templateUrl: './news-dialog.component.html',
  styleUrls: ['./news-dialog.component.css']
})
export class NewsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewsDialogComponent>,
    private courseService: CourseService,
    @Inject(MAT_DIALOG_DATA) public data: any, private newsServices: NewsService,
    private uploadService: UploadService,
    private snackBar: MatSnackBar) { }

  form: FormGroup = new FormGroup({
    idCourse: new FormControl(this.data.stu.course != null ? this.data.stu.course.idCourse : '', [Validators.required]),
    title: new FormControl(this.data.stu.title, [Validators.required]),
    content: new FormControl(this.data.stu.content, [Validators.required]),
    describes: new FormControl(this.data.stu.describes, [Validators.required]),
    image: new FormControl(''),
    avatar: new FormControl('')
  });


  courses: any;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  //
  selectedFiles1: FileList;
  currentFileUpload1: File;
  progress1: { percentage1: number } = { percentage1: 0 };

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  ngOnInit() {
    this.courseService.getData().subscribe(data => {
      this.courses = data;
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.newsServices.updateData(this.data.stu.idNews, form).subscribe(data => {
      if (data != null) {
        if (this.selectedFiles != null) {
          this.onUpload();
        }
        if (this.selectedFiles1 != null) {
          this.onUpload1();
        }
        this.snackBar.open("Sửa thành công 1 tin tức!!!", "Update", {
          duration: 2000,
        });
      } else {
        this.snackBar.open("Lỗi!!!", "Update", {
          duration: 2000,
        });
      }
      this.onCancel();
    });
  }

  onFileSelected(event) {
    this.selectedFiles = event.target.files;
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
