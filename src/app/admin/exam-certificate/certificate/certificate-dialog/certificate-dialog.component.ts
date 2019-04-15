import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExamService } from 'src/app/services/exam.service';
import { StudentService } from 'src/app/services/student.service';
import { CertificateService } from 'src/app/services/certificate.service';

@Component({
  selector: 'app-certificate-dialog',
  templateUrl: './certificate-dialog.component.html',
  styleUrls: ['./certificate-dialog.component.css']
})
export class CertificateDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CertificateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private examService: ExamService,
    private certificateService: CertificateService,
    private studentService: StudentService, private snackBar: MatSnackBar) { }

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
  
    ngOnInit() {
      
    }
  
    onCancel(){ 
      this.dialogRef.close();
    }
  
    onSubmit(form){
      this.certificateService.updateData(this.data.stu.idCertificate, form).subscribe(data =>{
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
