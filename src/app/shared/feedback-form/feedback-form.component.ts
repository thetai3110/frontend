import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';
import { FeedbackService } from 'src/app/services/feedback.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    studentName: new FormControl('', [Validators.required]),
    idCourse: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    rate: new FormControl('')
  });

  constructor(private courseService: CourseService,
              private feedBackService: FeedbackService,
              private snackBar: MatSnackBar) { }

  faStar = faStar;
  courses: any;
  color1 = 'black';
  color2 = 'black';
  color3 = 'black';
  color4 = 'black';
  color5 = 'black';
  status = false;
  curNum = 0;

  ngOnInit() {
    this.courseService.getData().subscribe(data => {
      this.courses = data;
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  onRatingOver(num) {
    if(this.curNum != num){
       this.status = false;
       if (this.curNum == 1) {
        this.color1 = "black";
      } else if (this.curNum == 2) {
        this.color2 = "black";
      } else if (this.curNum == 3) {
        this.color3 = "black";
      } else if (this.curNum == 4) {
        this.color4 = "black";
      } else if (this.curNum == 5) {
        this.color5 = "black";
      }
    }
    if (num == 1) {
      this.color1 = "orange";
    } else if (num == 2) {
      this.color1 = "orange";
      this.color2 = "orange";
    } else if (num == 3) {
      this.color1 = "orange";
      this.color2 = "orange";
      this.color3 = "orange";
    } else if (num == 4) {
      this.color1 = "orange";
      this.color2 = "orange";
      this.color3 = "orange";
      this.color4 = "orange";
    } else if (num == 5) {
      this.color1 = "orange";
      this.color2 = "orange";
      this.color3 = "orange";
      this.color4 = "orange";
      this.color5 = "orange";
    }
  }

  onRatingOut(num) {
    if (this.status == false) {
      if (num == 1) {
        this.color1 = "black";
      } else if (num == 2) {
        this.color1 = "black";
        this.color2 = "black";
      } else if (num == 3) {
        this.color1 = "black";
        this.color2 = "black";
        this.color3 = "black";
      } else if (num == 4) {
        this.color1 = "black";
        this.color2 = "black";
        this.color3 = "black";
        this.color4 = "black";
      } else if (num == 5) {
        this.color1 = "black";
        this.color2 = "black";
        this.color3 = "black";
        this.color4 = "black";
        this.color5 = "black";
      }
    }
  }

  onRating(num) {
    this.status = true;
    this.curNum = num;
    if (num == 1) {
      this.color1 = "orange";
    } else if (num == 2) {
      this.color1 = "orange";
      this.color2 = "orange";
    } else if (num == 3) {
      this.color1 = "orange";
      this.color2 = "orange";
      this.color3 = "orange";
    } else if (num == 4) {
      this.color1 = "orange";
      this.color2 = "orange";
      this.color3 = "orange";
      this.color4 = "orange";
    } else if (num == 5) {
      this.color1 = "orange";
      this.color2 = "orange";
      this.color3 = "orange";
      this.color4 = "orange";
      this.color5 = "orange";
    }
  }

  onSubmit(form){
    form.rate = this.curNum;
    this.feedBackService.postData(form).subscribe(data =>{
      if(data != null){
        this.snackBar.open("Cảm ơn bạn đã phản hồi cho chúng tôi!!!", "FeedBack", {
          duration: 2000,
        });
        this.resetForm();
      }else{
        this.snackBar.open("Lỗi!!!", "FeedBack", {
          duration: 2000,
        });
        this.resetForm()
      }
    });
  }

  resetForm(){
    this.form = new FormGroup({
      studentName: new FormControl('', [Validators.required]),
      idCourse: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      rate: new FormControl('')
    });
  }
}
