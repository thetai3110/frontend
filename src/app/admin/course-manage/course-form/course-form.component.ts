import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../../services/upload.service';
import { CourseService } from '../../../services/course.service';
import { LevelService } from '../../../services/level.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EducationprogramService } from 'src/app/services/educationprogram.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})

export class CourseFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    course: new FormControl('', [Validators.required]),
    idLevel: new FormControl('', [Validators.required]),
    idEdu: new FormControl('', [Validators.required]),
    other1: new FormControl(''),
    other2: new FormControl(''),
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
  showOther1 = false; showLevel = true;
  showOther2 = false; showEdu = true;
  public allLevel: {};
  public allEdu: {};
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private levelService: LevelService,
    private educationProgramService: EducationprogramService,
    private uploadService: UploadService,
    private courseService: CourseService,
    public dialogRef: MatDialogRef<CourseFormComponent>,
    private snackBar: MatSnackBar) { }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  ngOnInit() {
    this.levelService.getData().subscribe(data => {
      if (data != null)
        this.allLevel = data;
    });
    this.educationProgramService.getData().subscribe(data => {
      if (data != null)
        this.allEdu = data;
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    //Thêm level và edu mới
    if (this.showOther1 == true && this.showOther2 == true) {
      var level = {
        level: this.form.value.other1
      }
      this.levelService.postData(level).subscribe(lv => {
        if (lv != null) {
          var education = {
            eduName: this.form.value.other2
          }
          this.educationProgramService.postData(education).subscribe(edu => {
            if (edu != null) {
              this.form.value.idLevel = lv['idLevel'];
              this.form.value.idEdu = edu['idEdu'];
              this.onPostCourse(form);
            }
          });
        }
      });
      //Thêm level mới
    } else if (this.showOther1 == true && this.showOther2 == false) {
      var level = {
        level: this.form.value.other1
      }
      this.levelService.postData(level).subscribe(lv => {
        if (lv != null) {
          this.form.value.idLevel = lv['idLevel'];
          this.onPostCourse(form);
        }
      });
      // Thêm edu mới
    } else if (this.showOther2 == true && this.showOther1 == false) {
      var education = {
        eduName: this.form.value.other2
      }
      this.educationProgramService.postData(education).subscribe(edu => {
        if (edu != null) {
          this.form.value.idEdu = edu['idEdu'];
          this.onPostCourse(form);
        }
      });
      // Không thêm
    } else {
      this.onPostCourse(form);
    }

  }

  onPostCourse(form) {
    this.courseService.postData(form).subscribe(data => {
      if (data != null) {
        if (this.selectedFiles != null) {
          this.onUpload();
        }
        this.snackBar.open("Success!!!", "Add", {
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

  onChange1() {
    this.showLevel = !this.showLevel;
    this.showOther1 = !this.showOther1;
  }

  onChange2() {
    this.showEdu = !this.showEdu;
    this.showOther2 = !this.showOther2;
  }
}
