import { Component, OnInit } from '@angular/core';
import { LecturersService } from '../../../services/lecturers.service';
import { MajorsService } from '../../../services/majors.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-lecturers-form',
  templateUrl: './lecturers-form.component.html',
  styleUrls: ['./lecturers-form.component.css']
})
export class LecturersFormComponent implements OnInit {
  constructor(private lecturersService: LecturersService,
    private majorsService: MajorsService,  private accountService: AccountService) { }


  form: FormGroup = new FormGroup({
    lecturersName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    idAccount: new FormControl(''),
    idMajors: new FormControl('', [Validators.required]),
    lecturersDate: new FormControl(new Date(), [Validators.required]),
    sex: new FormControl('1', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    salary: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    image: new FormControl(null),
  });

  allAccount: any; 
  allMajors: any;

  ngOnInit() {
    this.accountService.getData().subscribe(data =>{
      this.allAccount = data;
    });
    this.majorsService.getData().subscribe(data =>{
      this.allMajors = data;
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  onSubmit(form) {
    this.lecturersService.postData(form).subscribe(data => {
      if (data != null) {
        alert('Success!');
      }
    });
  }

}
