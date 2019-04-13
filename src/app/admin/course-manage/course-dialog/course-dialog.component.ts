import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CourseService } from '../../../services/course.service';
import { LevelService } from 'src/app/services/level.service';
import { UploadService } from 'src/app/services/upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { EducationprogramService } from 'src/app/services/educationprogram.service';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private courseService: CourseService,
    private levelService: LevelService,
    private educationProgramService: EducationprogramService,
    private uploadService: UploadService,
    private snackBar: MatSnackBar) { }

    form: FormGroup = new FormGroup({
      course: new FormControl(this.data.stu.course, [Validators.required]),
      idLevel: new FormControl(this.data.stu != null? this.data.stu.level.idLevel : '', [Validators.required]),
      idEdu: new FormControl(this.data.stu != null? this.data.stu.educationProgram.idEdu : '', [Validators.required]),
      other1: new FormControl(''),
      other2: new FormControl(''),
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
  
    showOther1 = false; showLevel = true;
    showOther2 = false; showEdu = true;
    allLevel : any;
    allEdu : any;
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
      });
      this.educationProgramService.getData().subscribe(data =>{
        if(data != null)
          this.allEdu = data;
      });
    }
  
    onCancel(){
      this.dialogRef.close();
    }
  
    onSubmit(form){
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
              this.onUpdateCourse(form);
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
          this.onUpdateCourse(form);
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
          this.onUpdateCourse(form);
        }
      });
      // Không thêm
    } else {
      this.onUpdateCourse(form);
    }

    }

    onUpdateCourse(form){
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

    onChange1() {
      this.showLevel = !this.showLevel;
      this.showOther1 = !this.showOther1;
    }
  
    onChange2() {
      this.showEdu = !this.showEdu;
      this.showOther2 = !this.showOther2;
    }
}
