import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExamService } from 'src/app/services/exam.service';
import { StudentService } from 'src/app/services/student.service';
import { CertificateService } from 'src/app/services/certificate.service';
import { MarksService } from 'src/app/services/marks.service';

@Component({
  selector: 'app-certificate-dialog',
  templateUrl: './certificate-dialog.component.html',
  styleUrls: ['./certificate-dialog.component.css']
})
export class CertificateDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CertificateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private examService: ExamService,
    private certificateService: CertificateService,
    private studentService: StudentService,
    private marksService: MarksService,
    private snackBar: MatSnackBar) { }

  form: FormGroup = new FormGroup({
    idExam: new FormControl(this.data.stu.exam == null ? '' : this.data.stu.exam.idExam, [Validators.required]),
    idStudent: new FormControl(this.data.stu.student == null ? '' : this.data.stu.student.idStudent, [Validators.required]),
    idMarks: new FormControl(this.data.stu.marks == null ? '' : this.data.stu.marks.marks, [Validators.required]),
    dateCertificate: new FormControl(new Date(this.data.stu.dateCertificate), [Validators.required]),
    classification: new FormControl(this.data.stu.classification, [Validators.required])
  });

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  allExam: any; allStudent: any;

  ngOnInit() {
    this.examService.getData().subscribe(data => {
      this.allExam = data;
    });
    this.studentService.getData().subscribe(data => {
      this.allStudent = data;
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(form) {
    this.marksService.getDataById(this.data.stu.marks.idMarks).subscribe(rs => {
      rs['marks'] = form.idMarks;
      this.marksService.updateData(this.data.stu.marks.idMarks, rs).subscribe(rs1 => {
        if (rs1 != null) {
          form.idMarks = rs1['idMarks']
          this.certificateService.updateData(this.data.stu.idCertificate, form).subscribe(data => {
            if (data != null) {
              this.snackBar.open("Success!!!", "Update", {
                duration: 2000,
              });
            } else {
              this.snackBar.open("Fail!!!", "Update", {
                duration: 2000,
              });
            }
            this.onCancel();
          });
        };
      });
    });
  }

}
