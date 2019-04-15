import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { ExamService } from 'src/app/services/exam.service';
import { StudentService } from 'src/app/services/student.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CertificateService } from 'src/app/services/certificate.service';

@Component({
  selector: 'app-certificate-form',
  templateUrl: './certificate-form.component.html',
  styleUrls: ['./certificate-form.component.css']
})
export class CertificateFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    idExam: new FormControl(''),
    idStudent: new FormControl('',[Validators.required]),
    idMarks: new FormControl('', [Validators.required]),
    dateCertificate: new FormControl(new Date(),[Validators.required]),
    classification: new FormControl('', [Validators.required])
  }); 

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  constructor(private examService: ExamService,
    private studentService: StudentService,
    private certificateService: CertificateService,
    public dialogRef: MatDialogRef<CertificateFormComponent>,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    
  }

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(form){
    // this.certificateService.postData(form).subscribe(data =>{
    //   if(data!= null){
    //     this.snackBar.open("Success!!!", "Add", {
    //       duration: 2000,
    //     });
    //   }else{
    //     this.snackBar.open("Fail!!!", "Add", {
    //       duration: 2000,
    //     });
    //   }
    //   this.onCancel();
    // });
  }

}
