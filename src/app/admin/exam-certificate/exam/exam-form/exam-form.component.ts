import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';
import { ExamService } from 'src/app/services/exam.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    idClass: new FormControl(''),
    dayExam: new FormControl(new Date(), [Validators.required]),
    timeExam: new FormControl('', [Validators.required]),
    duration: new FormControl('',[Validators.required]),
    status: new FormControl('1', [Validators.required])
  }); 

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  constructor(private examService: ExamService,
    private classesService: ClassesService,
    public dialogRef: MatDialogRef<ExamFormComponent>,
    private snackBar: MatSnackBar) { }

  allClass : any;

  ngOnInit() {
    this.classesService.getData().subscribe(data=>{
      if(data != null)
        this.allClass = data;
    })
  }

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(form){
    this.examService.postData(form).subscribe(data =>{
      if(data!= null){
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
  }

}
