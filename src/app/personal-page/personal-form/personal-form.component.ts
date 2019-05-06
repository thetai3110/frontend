import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { MatSnackBar } from '@angular/material';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {

  @Input() student: any;

  constructor(private studentService: StudentService,
    private snackBar: MatSnackBar,
    private uploadService: UploadService) { }

  form: FormGroup = new FormGroup({
    studentName: new FormControl,
    idAccount: new FormControl,
    cmnd: new FormControl,
    studentDate: new FormControl,
    sex: new FormControl,
    address: new FormControl,
    email: new FormControl,
    phone: new FormControl,
    job: new FormControl,
    image: new FormControl,
  });
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  showFiller = false;

  ngOnInit() {
    setTimeout(() => {
      this.form = new FormGroup({
        studentName: new FormControl(this.student != null ? this.student['studentName'] : "", [Validators.required, Validators.maxLength(30)]),
        cmnd: new FormControl(this.student != null ? this.student['cmnd'] : "", [Validators.required, Validators.pattern("[0-9]*")]),
        studentDate: new FormControl(new Date(this.student != null ? this.student['studentDate'] : ""), [Validators.required]),
        sex: new FormControl(String(this.student != null ? this.student['sex'] : ""), [Validators.required]),
        address: new FormControl(this.student != null ? this.student['address'] : "", [Validators.required]),
        email: new FormControl(this.student != null ? this.student['email'] : "", [Validators.required, Validators.email]),
        phone: new FormControl(this.student != null ? this.student['phone'] : "", [Validators.required, Validators.pattern("[0-9]*")]),
        job: new FormControl(this.student != null ? this.student['job'] : ""),
        image: new FormControl('')
      });
    }, 1000);
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  onSubmit(form) {
    this.studentService.updateData(this.student['idStudent'], form).subscribe(data => {
      if (data != null) {
        if(this.selectedFiles != null){
          this.onUpload();
        }
        this.snackBar.open("Success!!!", "Update", {
          duration: 2000,
        });
      }
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
